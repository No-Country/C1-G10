import { createAsyncThunk } from "@reduxjs/toolkit";
const url = "http://localhost:5002";

export const newDestination = createAsyncThunk(
  "destination/newDestination",
  async (payload) => {
    try {
      let formData = new FormData();
      const [destination, images, coor] = payload;
      formData.append("destinationName", destination);
      formData.append("image", images);
      formData.append("coordinates", coor);
      const response = await fetch(`${url}/newDestinationModel`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
