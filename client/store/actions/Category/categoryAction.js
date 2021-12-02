import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:5002";

export const getAllCategories = createAsyncThunk("GET_CATEGORY", async () => {
  try {
    const response = await fetch(`${url}/getAllCategories`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
});
