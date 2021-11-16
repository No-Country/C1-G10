import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tours: [],
  loading: "",
};

/* GET THE DATA */
export const getAllTours = createAsyncThunk(
  "tours/getAll",
  async (dispatch, getState) => {
    const response = await fetch(
      "https://my.api.mockaroo.com/tourSchema.json?key=1f82ed90"
    );
    const data = await response.json();
    return data;
  }
);

export const tourSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllTours.fulfilled]: (state, action) => {
      state.tours = action.payload;
      state.loading = "success";
    },
    [getAllTours.pending]: (state, action) => {
      state.loading = "laoding";
    },
    [getAllTours.rejected]: (state, action) => {
      state.loading = "rejected";
    },
  },
});

export default tourSlice.reducer;
