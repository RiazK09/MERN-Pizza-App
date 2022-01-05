import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Actions
import { addToCart } from "../actions/cartActions";

// Style Animations
import AOS from "aos";
import "aos/dist/aos.css";

// React Bootstrap Component
import { Modal } from "react-bootstrap";

export default function Pizza({ pizza }) {
  AOS.init();

  // State(variables)
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");
  const [show, setShow] = useState(false);

  // Functions (Pizza Modal)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  // Add to Cart
  function addtocart() {
    dispatch(addToCart(pizza, quantity, variant));
  }

  return (
    <div
      data-aos="zoom-in"
      className="shadow-lg p-3 mb-3 mt-5 bg-white rounded text-center"
    >
      {/* Whenever a user clicks on the h1 (pizza name) or on the image, it will launch the
      pizza modal which will display additional information regarding the pizza.*/}
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid" alt="Pizza's" />
      </div>

      {/* flex container starts */}
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select
            className="form-control-sm"
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
          >
            {pizza.variants.map((variant) => {
              return <option value={variant}>{variant}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control-sm"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      {/* flex container ends */}

      {/* flex container starts */}
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price: R{pizza.prices[0][variant] * quantity}
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn btn-success" onClick={addtocart}>
            ADD TO CART
          </button>
        </div>
      </div>
      {/* flex container ends */}

      {/* Pizza Modal starts */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            className="img-fluid"
            style={{ height: "280px", width: "500px" }}
            alt="Pizza's"
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
      {/* Pizza Modal ends */}
    </div>
  );
}
