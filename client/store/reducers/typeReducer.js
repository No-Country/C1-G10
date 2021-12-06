import { createSlice } from "@reduxjs/toolkit";
import { newType, getAllTypes } from "../actions/Types/typesAction";

const initialState = [];

const typeSlice = createSlice({
  name: "types",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(newType.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(getAllTypes.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default typeSlice.reducer;
