import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../actions/Category/categoryAction";

const initialState = [];

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default categorySlice.reducer;
