import { createAsyncThunk } from "@reduxjs/toolkit";
const devUrl = "http://localhost:5002";
const liveUrl = "https://tour-page-nc.herokuapp.com";

/* GET ALL PACKAGES */
export const getAllPackages = createAsyncThunk("GET_PACKAGES", async () => {
  try {
    const response = await fetch(`${liveUrl}/getAllPackages`);
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
        `${liveUrl}/getFilteredPackages?searchingKey=${searchingKey}&value=${value}`,
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

export const newPackage = createAsyncThunk(
  "NEW_PACKAGE",
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const [
        destinationId,
        categoryId,
        typeId,
        packageName,
        description,
        currency,
        totalCost,
        totalDays,
        remainingSpots,
      ] = payload;
      const response = await fetch(`${liveUrl}/newPackage`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          destinationId,
          categoryId,
          typeId,
          packageName,
          description,
          currency,
          totalCost,
          totalDays,
          remainingSpots,
        }),
      });
      if (!response.ok) return rejectWithValue(500);
      const data = await response.json();
      return fulfillWithValue(data);
    } catch (err) {
      return err;
    }
  }
);

export const getPackageById = createAsyncThunk(
  "GET_PACKAGEID",
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch(`${liveUrl}/getAPackage/${payload}`);
      if (!response.ok) return rejectWithValue(500);
      const data = await response.json();

      return fulfillWithValue(data);
    } catch (err) {
      return err;
    }
  }
);
