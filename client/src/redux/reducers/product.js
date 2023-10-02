import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  success: false,
  isLoading: true,
  error: null,
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("productCreateRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("productCreateSuccess", (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.product = action.payload;
    })
    .addCase("productCreateFail", (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    })

    /* Get All Products */
    .addCase("getAllProductsShopRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllProductsShopSuccess", (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.products = action.payload;
    })
    .addCase("getAllProductsShopFail", (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    })
    /* Delete A Product n Shop */
    .addCase("deleteProductRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("deleteProductSuccess", (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.message = action.payload;
    })
    .addCase("deleteProductFail", (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
