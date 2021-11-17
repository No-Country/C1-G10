import { createAsyncThunk } from "@reduxjs/toolkit";

/* GET ALL PREDEFINED TOURS */
export const getAllTours = createAsyncThunk("GET_PROMOS", async () => {
  const response = await fetch(
    "https://my.api.mockaroo.com/tourSchema.json?key=1f82ed90"
  );
  const data = await response.json();
  return data;
});
