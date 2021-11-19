import { createReducer } from "@reduxjs/toolkit";
import { getAllTours } from "../actions/toursActions";

const initialState = {
  packages: [],
};

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllTours.fulfilled, (state, action) => {
    state.packages.push(action.payload);
  });
});

export default rootReducer;
