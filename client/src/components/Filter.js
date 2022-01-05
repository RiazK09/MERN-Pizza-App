import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Actions
import { filterPizzas } from "../actions/pizzaActions";

export default function Filter() {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <div className="container mt-5">
      <div className="row justify-content-center border shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-3 w-100">
          <input
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            value={searchKey}
            type="text"
            className="form-control w-100"
            placeholder="search pizzas"
          />
        </div>
        <div className="col-md-3 w-100">
          <select
            className="form-control w-100 mt-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non Veg</option>
          </select>
        </div>
        <div className="col-md-3 w-100">
          <button
            className="btn btn-success w-100 mt-2"
            onClick={() => {
              dispatch(filterPizzas(searchKey, category));
            }}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
