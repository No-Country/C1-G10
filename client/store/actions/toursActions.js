import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const getPromos = createAction("GET_PROMOS");

export const getAllTours = createAsyncThunk(getPromos, async () => {
  const response = await fetch(
    "https://my.api.mockaroo.com/tourSchema.json?key=1f82ed90"
  );
  const data = await response.json();
  return data;
});
