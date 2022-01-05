import React from "react";
import { Switch } from "react-router-dom";
import { Link } from "react-router-dom";

// Auth
import AdminRoute from "../auth/AdminRoute";

// Core
import Layout from "../core/Layout";

// Screens
import Addpizza from "./Addpizza";
import Editpizza from "./Editpizza";
import Orderslist from "./Orderslist";
import Pizzaslist from "./Pizzaslist";

export default function Adminscreen() {
  return (
    <div>
      <Layout />
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2
            style={{
              fontSize: "35px",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            Admin Panel
          </h2>
          <ul className="adminfunctions">
            <li>
              <Link to={"/admin-panel/pizzaslist"} style={{ color: "white" }}>
                Pizzas List
              </Link>
            </li>
            <li>
              <Link to={"/admin-panel/addpizza"} style={{ color: "white" }}>
                Add Pizza
              </Link>
            </li>
            <li>
              <Link to={"/admin-panel/orderslist"} style={{ color: "white" }}>
                Orders List
              </Link>
            </li>
          </ul>

          <Switch>
            <AdminRoute path="/admin-panel" component={Pizzaslist} exact />
            <AdminRoute
              path="/admin-panel/pizzaslist"
              component={Pizzaslist}
              exact
            />
            <AdminRoute
              path="/admin-panel/addpizza"
              component={Addpizza}
              exact
            />
            <AdminRoute
              path="/admin-panel/orderslist"
              component={Orderslist}
              exact
            />
            <AdminRoute
              path="/admin-panel/editpizza/:pizzaid"
              component={Editpizza}
              exact
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}
