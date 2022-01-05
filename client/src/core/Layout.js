import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

// Helpers
import { isAuth, signout } from "../auth/helpers";

const Layout = ({ children, match, history }) => {
  const isActive = (path) => {
    if (match.path === path) {
      return { color: "#000" };
    } else {
      return { color: "#fff" };
    }
  };

  const cartstate = useSelector((state) => state.cartReducer);

  const nav = () => (
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link to="/" className="text-light nav-link" style={isActive("/")}>
          About
        </Link>
      </li>

      {/* If NOT authenticated, display signin and signup NavLinks */}
      {!isAuth() && (
        <>
          <li className="nav-item">
            <Link
              to="/signin"
              className="text-light nav-link"
              style={isActive("/signin")}
            >
              Signin
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className="text-light nav-link"
              style={isActive("/signup")}
            >
              Signup
            </Link>
          </li>
        </>
      )}

      {/* If authenticated, display the Menu */}
      {isAuth() && (
        <li className="nav-item">
          <Link to="/menu" className="nav-link" style={isActive("/menu")}>
            Pizza Menu
          </Link>
        </li>
      )}

      {/* If authenticated, display the users name (visible to admin only) */}
      {isAuth() && isAuth().role === "admin" && (
        <li className="nav-item ml-auto">
          <Link to="/admin" className="nav-link" style={isActive("/admin")}>
            {isAuth().name} (Profile)
          </Link>
        </li>
      )}

      {/* If authenticated, display the Admin Panel (visible to admin only) */}
      {isAuth() && isAuth().role === "admin" && (
        <li className="nav-item">
          <Link
            to="/admin-panel"
            className="nav-link"
            style={isActive("/admin-panel")}
          >
            Admin Panel
          </Link>
        </li>
      )}

      {/* If authenticated, display the users name (visible to standard user) */}
      {isAuth() && isAuth().role === "subscriber" && (
        <li className="nav-item ml-auto">
          <Link to="/private" className="nav-link" style={isActive("/private")}>
            {isAuth().name} (Profile)
          </Link>
        </li>
      )}

      {/* If authenticated, display cart functionality */}
      {isAuth() && (
        <li className="nav-item">
          <Link to="/cart" className="nav-link" style={isActive("/cart")}>
            Cart {cartstate.cartItems.length}
          </Link>
        </li>
      )}

      {/* If authenticated, display orders functionality */}
      {isAuth() && (
        <li className="nav-item">
          <Link to="/orders" className="nav-link" style={isActive("/orders")}>
            Orders
          </Link>
        </li>
      )}

      {/* If authenticated, display signout functionality */}
      {isAuth() && (
        <li className="nav-item">
          <span
            className="nav-link"
            style={{ cursor: "pointer", color: "#fff" }}
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  );

  return (
    <>
      {nav()}
      <div>{children}</div>
    </>
  );
};

export default withRouter(Layout);
