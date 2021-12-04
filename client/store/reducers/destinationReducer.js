import { createSlice } from "@reduxjs/toolkit";
import { newDestination } from "../actions/Destiantions/destinationsActions";

const initialState = [];

const destinationSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(newDestination.pending, (state, action) => {
      console.log(action);
    }),
      builder.addCase(newDestination.fulfilled, (state, action) => {
        state.destination.push(action.payload);
      });
  },
});

export default destinationSlice.reducer;
