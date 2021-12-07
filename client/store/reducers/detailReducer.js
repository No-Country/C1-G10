import { createSlice } from "@reduxjs/toolkit";
import { getAllDetails  } from ".";

const initialState = [];

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllDetails.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default detailSlice.reducer;
