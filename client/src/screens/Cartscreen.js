import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";

// Styling
import { ToastContainer, toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

// Core
import Layout from "../core/Layout";

// Components
import Checkout from "../components/Checkout";

export default function Cartscreen() {
  AOS.init();

  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  let subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();

  return (
    <div>
      <Layout />
      <div className="row justify-content-center p-2 mt-5" data-aos="fade-down">
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
        {/* This div will display the items contained in the cart*/}
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                {/* Basic Information */}
                <div className="text-left m-1 w-100">
                  <h1>
                    {item.name} [{item.variant}]
                  </h1>
                  <h1>
                    Price: {item.quantity} * R{item.prices[0][item.variant]} = R
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity : </h1>
                  {/* Incrementing item quantity from cart screen */}
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.variant)
                      );
                    }}
                  ></i>
                  <b>{item.quantity}</b>
                  {/* Decrementing item quantity from cart screen */}
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.variant)
                      );
                    }}
                  ></i>
                  <hr />
                </div>

                {/* Image */}
                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    alt="Pizza's"
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>

                {/* Delete Button */}
                <div className="m-1 w-100">
                  <i
                    className="fa fa-trash mt-5"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>

        {/* This div will display the Subtotal along with an option to "Pay Now".*/}
        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "45px" }}>SubTotal: R{subtotal}</h2>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
