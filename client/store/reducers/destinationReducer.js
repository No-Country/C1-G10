import { createSlice } from "@reduxjs/toolkit";
import {
  newDestination,
  getAllDestinations,
} from "../actions/Destiantions/destinationsActions";

const initialState = [];

const destinationSlice = createSlice({
  name: "destinations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(newDestination.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    /* ALL DESTINATIONS */
    builder.addCase(getAllDestinations.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default destinationSlice.reducer;
