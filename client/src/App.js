import React from "react";

// Core
import Layout from "./core/Layout";

const App = () => {
  return (
    <div className="about">
      <Layout />
      <div className="col-md-6 offset-md-3 text-center">
        <h2 style={{ paddingTop: "90px" }}>Welcome to</h2>
        <h2 style={{ fontSize: "4em" }}>RIO'S PIZZA</h2>
        <p className="font-italic">
          This is a full-stack CRUD web application built using Node, Express,
          React and MongoDB (the MERN Stack). The application has its own custom
          server built using Express. As a matter of fact, the Pizza Delivery
          web application has three passport strategies which authenticates
          users using a JSON Web Token (JWT). Together with the above mentioned
          functionality, it also allows for both: normal end-user as well as
          admin access.
        </p>
      </div>
    </div>
  );
};

export default App;
