import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  success: false,
  isLoading: true,
  error: null,
  products: [],
  product: null,
  allProducts: [],
  message: "",
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
    // Create Product Cases
    .addCase("productCreateRequest", (state) => {
      state.isLoading = true;
      state.success = false;
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

    // Get All Products of Shop Cases
    .addCase("getAllProductsShopRequest", (state) => {
      state.isLoading = true;
      state.success = false;
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

    // Delete A Product of A Shop Cases
    .addCase("deleteProductRequest", (state) => {
      state.isLoading = true;
      state.success = false;
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

    // Get All Product of A Shop Cases
    .addCase("getAllProductsRequest", (state) => {
      state.isLoading = true;
      state.success = false;
    })
    .addCase("getAllProductsSuccess", (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.allProducts = action.payload;
    })
    .addCase("getAllProductsFail", (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    })

    // Clear Errors Case
    .addCase("clearErrors", (state) => {
      state.error = null;
      state.success = false;
    });
});
