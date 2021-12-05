import { createSlice } from "@reduxjs/toolkit";
import {
  getAllPackages,
  filterPackages,
} from "../actions/Packages/packagesActions";

const initialState = [];

const packageSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPackages.fulfilled, (state, action) => {
      state.push(action.payload);
    });

    /* FILTERED PACKAGES */
    builder.addCase(filterPackages.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default packageSlice.reducer;
