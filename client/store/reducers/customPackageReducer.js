import { createSlice } from "@reduxjs/toolkit";
import { getAllCustomPackages } from "../actions/customPackage/customPackagesActions";

const initialState = [];

const customPackageSlice = createSlice({
  name: "customPackages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCustomPackages.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default customPackageSlice.reducer;
