import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
const url = "http://localhost:5002";

/* GET ALL PACKAGES */
export const getAllPackages = createAsyncThunk("GET_PACKAGES", async () => {
  try {
    const response = await fetch(`${url}/getAllPackages`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

/* FILTER PACKAGES */
export const filterPackages = createAsyncThunk(
  "GET_FILTERED",
  async (payload) => {
    try {
      const [searchingKey, value] = payload;
      const response = await fetch(
        `${url}/getFilteredPackages?searchingKey=${searchingKey}&value=${value}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  }
);

// TODO ORGANIZE ROOT REDUCER IN SPECIFIC FOLDERS
