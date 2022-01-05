import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

// Actions
import { placeOrder } from "../actions/orderActions";

//Components
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHandler(token) {
    dispatch(placeOrder(token, subtotal));
  }

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order is Placed Successfully" />}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        currency="ZAR"
      >
        <button className="btn btn-success">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
