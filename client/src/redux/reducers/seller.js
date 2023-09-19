import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isSeller: false,
  seller: null,
  isLoading: false,
  error: null,
};

export const sellerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoginSellerRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("LoadSellerSuccess", (state, action) => {
      state.isLoading = false;
      state.isSeller = true;
      state.seller = action.payload;
    })
    .addCase("LoadSellerFail", (state, action) => {
      state.isLoading = false;
      state.isSeller = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
