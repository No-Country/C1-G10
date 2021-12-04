import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:5002";

export const getAllTypes = createAsyncThunk("GET_TYPES", async () => {
  try {
    const response = await fetch(`${url}/getAllTypes`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
});
