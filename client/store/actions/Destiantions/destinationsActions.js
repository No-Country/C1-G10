import { createAsyncThunk } from "@reduxjs/toolkit";
const devUrl = "http://localhost:5002";
const liveUrl = "https://tour-page-nc.herokuapp.com";

export const newDestination = createAsyncThunk(
  "destination/newDestination",
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      let formData = new FormData();
      const [destination, images, coor] = payload;
      formData.append("destinationName", destination);
      formData.append("image", images);
      formData.append("coordinates", coor);
      const response = await fetch(`${liveUrl}/newDestinationModel`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) return rejectWithValue(500);
      const data = await response.json();
      return fulfillWithValue(data);
    } catch (err) {
      return err;
    }
  }
);

/* GET ALL DESTINATIONS */
export const getAllDestinations = createAsyncThunk(
  "GET_DESTINATIONS",
  async () => {
    const response = await fetch(`${liveUrl}/getAllDestinations`);
    const data = await response.json();
    return data;
  }
);
