import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("eventCreateRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("eventCreateSuccess", (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.event = action.payload;
    })
    .addCase("eventCreateFail", (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    })

    /* Get All events */
    .addCase("getAllEventsShopRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllEventsShopSuccess", (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.events = action.payload;
    })
    .addCase("getAllEventsShopFail", (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    })

    /* Delete A event n Shop */
    .addCase("deleteEventRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("deleteEventSuccess", (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.message = action.payload;
    })
    .addCase("deleteEventFail", (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
