import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCategories,
  newCategory,
} from "../actions/Category/categoryAction";

const initialState = [];

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(newCategory.fulfilled, (state, action) => {
      state = [...state, action.payload];
    });
  },
});

export default categorySlice.reducer;
