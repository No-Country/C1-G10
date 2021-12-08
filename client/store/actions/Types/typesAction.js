import { createAsyncThunk } from "@reduxjs/toolkit";

const devUrl = "http://localhost:5002";
const liveUrl = "https://tour-page-nc.herokuapp.com";

export const getAllTypes = createAsyncThunk("GET_TYPES", async () => {
  try {
    const response = await fetch(`${liveUrl}/getAllTypes`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
});

export const newType = createAsyncThunk("type/newType", async (payload) => {
  try {
    let formData = new FormData();
    const [type, image] = payload;
    formData.append("typeName", type);
    formData.append("image", image);

    const response = await fetch(`${liveUrl}/newTypeModel`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
});
