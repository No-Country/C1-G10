import { createAsyncThunk } from "@reduxjs/toolkit";


export const getAllDetails = createAsyncThunk("GET_DETAILS", async () => {
  try {
    const response = await fetch(`http://localhost:5002/getAPackage/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
});

