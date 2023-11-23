// eventReducer.js
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  success: false,
  error: null,
  event: null,
  events: [],
  allEvents: [],
  message: "",
};

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("eventCreateRequest", (state) => {
      state.isLoading = true;
      state.success = false;
    })
    .addCase("eventCreateSuccess", (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.event = action.payload;
      state.message = "Event created successfully";
    })
    .addCase("eventCreateFail", (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    })

    /* Get All events of a shop*/
    .addCase("getAllEventsShopRequest", (state) => {
      state.isLoading = true;
      state.success = false;
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
      state.success = false;
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

    /* Get all events */
    .addCase("getAllEventsRequest", (state) => {
      state.isLoading = true;
      state.success = false;
    })
    .addCase("getAllEventsSuccess", (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.allEvents = action.payload;
    })
    .addCase("getAllEventsFail", (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    })

    .addCase("clearErrors", (state) => {
      state.error = null;
      state.success = false;
      state.message = "";
    });
});

export default eventReducer;
