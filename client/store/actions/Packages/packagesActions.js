import { createAsyncThunk } from "@reduxjs/toolkit";
const url = "http://localhost:5002";

/* GET ALL PACKAGES */
export const getAllPackages = createAsyncThunk("GET_PACKAGES", async () => {
  const response = await fetch(`${url}/getAllPackages`);
  const data = await response.json();
  return data;
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
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

/* GET ALL DESTINATIONS */
export const getAllDestinations = createAsyncThunk(
  "GET_DESTINATIONS",
  async () => {
    const response = await fetch(`${url}/getAllDestinations`);
    const data = await response.json();
    return data;
  }
);
