import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getAllPizzas } from "../actions/pizzaActions";

// Core
import Layout from "../core/Layout";

// Components
import Pizza from "../components/Pizza";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";

export default function Homescreen() {
  //Redux utilised for managing state.
  const dispatch = useDispatch();

  //useSelector Hook is used to get the data from the reducers
  const pizzasState = useSelector((state) => state.getAllPizzasReducer);

  //Destructuring of all the variables present in the state
  const { pizzas, error, loading } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Layout />
      <Filter />
      <div className="row justify-content-center mt-5">
        {/*Conditional rendering for loading/error. If the page has loaded and there are
        no errors, it will display the pizzas array.*/}
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong!" />
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-5 m-3" key={pizza._id}>
                <Pizza pizza={pizza} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
