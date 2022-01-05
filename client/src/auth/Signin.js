import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

// Helpers
import { authenticate, isAuth } from "./helpers";

// Styling
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// Core
import Layout from "../core/Layout";

// Auth
import Google from "./Google";
import Facebook from "./Facebook";

const Signin = ({ history }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
  });

  // Destructuring of state
  const { email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const informParent = (response) => {
    authenticate(response, () => {
      isAuth() && isAuth().role === "admin"
        ? history.push("/admin-panel")
        : history.push("/menu");
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "POST",
      url: `/api/signin`,
      data: { email, password },
    })
      .then((response) => {
        // save the response (user, token) localstorage/cookie
        authenticate(response, () => {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            buttonText: "Submitted",
          });
          //toast.success(`Hey ${response.data.user.name}, Welcome Back!`);
          isAuth() && isAuth().role === "admin"
            ? history.push("/admin-panel")
            : history.push("/menu");
        });
      })
      .catch((error) => {
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response.data.error);
      });
  };

  const signinForm = () => (
    <form>
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
      <div className="SignIn">
        <div className="col-md-6 offset-md-3 pb-4">
          <ToastContainer />
          {isAuth() ? <Redirect to="/" /> : null}
          <h1 className="p-5 text-center">Signin</h1>
          <Google informParent={informParent} />
          <Facebook informParent={informParent} />
          {signinForm()}
          <br />
          <Link
            to="/auth/password/forgot"
            className="btn btn-sm btn-outline-danger mb-3"
          >
            Forgot Password
          </Link>
          <br />
          <Link to="/signup" className="btn btn-sm btn-outline-info">
            Click Here To Signup
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
