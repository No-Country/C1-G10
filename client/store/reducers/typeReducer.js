import { createSlice } from "@reduxjs/toolkit";
import { newType } from "../actions/Types/typesAction";

const initialState = [];

const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(newType.pending, (state, action) => {
      console.log(action);
    }),
      builder.addCase(newType.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default typeSlice.reducer;
