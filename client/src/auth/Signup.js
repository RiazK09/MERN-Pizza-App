import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

// Helpers
import { isAuth } from "./helpers";

// Styling
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// Core
import Layout from "../core/Layout";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    buttonText: "Submit",
  });

  // Destructuring of state
  const { name, email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "POST",
      url: `api/signup`,
      data: { name, email, password },
    })
      .then((response) => {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          buttonText: "Submitted",
        });
        toast.success(response.data.message);
      })
      .catch((error) => {
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response.data.error);
      });
  };

  const signupForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          value={name}
          type="text"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          value={email}
          type="email"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          value={password}
          type="password"
          className="form-control"
        />
      </div>

      <div>
        <button className="btn btn-primary" onClick={clickSubmit}>
          {buttonText}
        </button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="SignUp">
        <div className="col-md-6 offset-md-3 pb-4">
          <ToastContainer />
          {isAuth() ? <Redirect to="/" /> : null}
          <h1 className="p-5 text-center">Signup</h1>
          {signupForm()}
          <br />
          <Link
            to="/auth/password/forgot"
            className="btn btn-sm btn-outline-danger mb-3"
          >
            Forgot Password
          </Link>
          <br />
          <Link to="/signin" className="btn btn-sm btn-outline-info">
            Click Here To Signin
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
