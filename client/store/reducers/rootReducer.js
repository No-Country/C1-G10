import { createReducer } from "@reduxjs/toolkit";
import {
  getAllPackages,
  getAllDestinations,
  filterPackages,
} from "../actions/Packages/packagesActions";

const initialState = {
  packages: [],
  destinations: [],
};

const rootReducer = createReducer(initialState, (builder) => {
  /* ALL PACKAGES */
  builder.addCase(getAllPackages.fulfilled, (state, action) => {
    state.packages.push(action.payload);
  });
  /* ALL DESTINATIONS */
  builder.addCase(getAllDestinations.fulfilled, (state, action) => {
    state.destinations.push(action.payload);
  });
  /* FILTERED PACKAGES */
  builder.addCase(filterPackages.fulfilled, (state, action) => {
    console.log(action);
    state.packages.push(action.payload);
  });
});

export default rootReducer;
