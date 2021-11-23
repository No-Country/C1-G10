import { createReducer } from "@reduxjs/toolkit";
import { getAllTours } from "../actions/toursActions";

const initialState = {
  promos: [],
};

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllTours.fulfilled, (state, action) => {
    state.promos.push(action.payload);
  });
});

export default rootReducer;