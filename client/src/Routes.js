import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

// Auth
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Activate from "./auth/Activate";
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import Forgot from "./auth/Forgot";
import Reset from "./auth/Reset";

// Core
import Private from "./core/Private";
import Admin from "./core/Admin";

// Screens
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Adminscreen from "./screens/Adminscreen";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/signin" component={Signin} exact />
        <Route path="/auth/activate/:token" component={Activate} exact />
        <PrivateRoute path="/menu" component={Homescreen} exact />
        <PrivateRoute path="/cart" component={Cartscreen} exact />
        <PrivateRoute path="/orders" component={Ordersscreen} exact />
        <PrivateRoute path="/private" component={Private} exact />
        <AdminRoute path="/admin" component={Admin} exact />
        {/* The admin-panel will have nested routing, therefore I will exclude the
        exact prop. */}
        <AdminRoute path="/admin-panel" component={Adminscreen} />
        <Route path="/auth/password/forgot" component={Forgot} exact />
        <Route path="/auth/password/reset/:token" component={Reset} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
