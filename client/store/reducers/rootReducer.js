import { createReducer } from "@reduxjs/toolkit";
import { getAllCategories } from "../actions/Category/categoryAction";
import {
  getAllPackages,
  getAllDestinations,
  filterPackages,
} from "../actions/Packages/packagesActions";
import { getAllTypes } from "../actions/Types/typesAction";
import { getAllDetails } from "../actions/DetailTours/detailActions";

const initialState = {
  packages: [],
  destinations: [],
  types: [],
  categories: [],
  details: [],
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
    state.packages.push(action.payload);
  });

  /*                      TYPES                    */
  /* ALL TYPES */
  builder.addCase(getAllTypes.fulfilled, (state, action) => {
    state.types.push(action.payload);
  });

  /*                      CATEGORIES                     */
  builder.addCase(getAllCategories.fulfilled, (state, action) => {
    state.categories.push(action.payload);
  });
  //                      DETAILS
  builder.addCase(getAllDetails.fulfilled, (state, action) => {
    state.details.push(action.payload);
  });
});

export default rootReducer;
