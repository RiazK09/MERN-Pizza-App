import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

// Styling
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// Core
import Layout from "../core/Layout";

const Activate = () => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    show: true,
  });

  const params = useParams();

  useEffect(() => {
    let token = params.token;
    let { name } = jwt_decode(token);
    if (token) {
      setValues({ ...values, name, token });
    }
    // eslint-disable-next-line
  }, []);

  // Destructuring of state
  // eslint-disable-next-line
  const { name, token, show } = values;

  const clickSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `api/account-activation`,
      data: { token },
    })
      .then((response) => {
        setValues({
          ...values,
          show: false,
        });
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.err);
      });
  };

  const activationLink = () => (
    <div className="text-center">
      <h1 className="p-5">Hey {name}, Ready to activate your account?</h1>
      <button className="btn btn-outline-primary" onClick={clickSubmit}>
        Activate Account
      </button>
    </div>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <ToastContainer />
        {activationLink()}
      </div>
    </Layout>
  );
};

export default Activate;
