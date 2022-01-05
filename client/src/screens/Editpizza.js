import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getPizzaById, editPizza } from "../actions/pizzaActions";

// Components
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Editpizza({ match }) {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const getpizzabyidstate = useSelector((state) => state.getPizzaByIdReducer);

  const { pizza, loading } = getpizzabyidstate;

  const editpizzastate = useSelector((state) => state.editPizzaReducer);
  const { editloading, editerror, editsuccess } = editpizzastate;

  useEffect(() => {
    if (pizza) {
      if (pizza._id === match.params.pizzaid) {
        setName(pizza.name);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setSmallPrice(pizza.prices[0]["small"]);
        setMediumPrice(pizza.prices[0]["medium"]);
        setLargePrice(pizza.prices[0]["large"]);
        setImage(pizza.image);
      } else {
        dispatch(getPizzaById(match.params.pizzaid));
      }
    } else {
      dispatch(getPizzaById(match.params.pizzaid));
    }
    // eslint-disable-next-line
  }, [pizza, dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editedpizza = {
      _id: match.params.pizzaid,
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

    dispatch(editPizza(editedpizza));
  }

  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h2>Edit Pizza</h2>
        {loading && <Loading />}
        {editerror && <Error error="Something went wrong" />}
        {editsuccess && <Success success="Pizza details edited successfully" />}
        {editloading && <Loading />}

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
            placeholder="small varient price"
            value={smallPrice}
            onChange={(e) => {
              setSmallPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium varient price"
            value={mediumPrice}
            onChange={(e) => {
              setMediumPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large varient price"
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
          <button className="btn btn-danger mt-3" type="submit">
            Edit Pizza
          </button>
        </form>
      </div>
    </div>
  );
}
