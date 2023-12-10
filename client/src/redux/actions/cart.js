export const addToCart = (data) => (dispatch, getState) => {
  dispatch({ type: "addToCart", payload: data });

  const cartItems = getState().cart.cart;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  return data;
};

export const removeFromCart = (data) => (dispatch, getState) => {
  dispatch({ type: "removeFromCart", payload: data._id });

  const cartItems = getState().cart.cart;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  return data;
};
