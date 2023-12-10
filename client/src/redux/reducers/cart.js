import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

export const cartReducer = createReducer(initialState, {
  addToCart: (state, action) => {
    const newItem = action.payload;
    const existingItem = state.cart.find((item) => item._id === newItem._id);

    return {
      ...state,
      cart: existingItem
        ? state.cart.map((item) =>
            item._id === existingItem._id ? newItem : item
          )
        : [...state.cart, newItem],
    };
  },
  removeFromCart: (state, action) => {
    return {
      ...state,
      cart: state.cart.filter((item) => item._id !== action.payload),
    };
  },
});
