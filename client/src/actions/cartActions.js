import { toast } from "react-toastify";

//Adding to cart
export const addToCart = (pizza, quantity, variant) => (dispatch, getState) => {
  let cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    variant: variant,
    quantity: Number(quantity),
    prices: pizza.prices,
    price: pizza.prices[0][variant] * quantity,
  };

  /* Pizza qty cannot exceed 10. If a user tries to increment the qty past 10, a toastify 
  alert will pop-up.
  
  If a user decrements the pizza qty below 1, the item (pizza) will be removed from the 
  cart*/
  if (cartItem.quantity > 10) {
    toast.warn("You cannot add more than 10 quantities of the same pizza");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
  }

  /* Update localStorage - Note JSON data cannot be stored directly, hence the usage of 
  stringify.*/
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

//Deleting from cart
export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });

  /* This will remove the deleted item from localStorage. In essence, the item will not
  re-appear when the page has been refreshed.*/
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
