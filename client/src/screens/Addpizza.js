import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { addPizza } from "../actions/pizzaActions";

// Components
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Addpizza() {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const addpizzastate = useSelector((state) => state.addPizzaReducer);
  const { success, error, loading } = addpizzastate;

  function formHandler(e) {
    e.preventDefault();

    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(addPizza(pizza));
  }

  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h2>Add Pizza</h2>

        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New Pizza added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="small variant price"
            value={smallPrice}
            onChange={(e) => {
              setSmallPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium variant price"
            value={mediumPrice}
            onChange={(e) => {
              setMediumPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large variant price"
            value={largePrice}
            onChange={(e) => {
              setLargePrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <button className="btn btn-success mt-3" type="submit">
            Add Pizza
          </button>
        </form>
      </div>
    </div>
  );
}
