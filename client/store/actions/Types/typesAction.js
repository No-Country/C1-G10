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

export const newType = createAsyncThunk("type/newType", async (payload) => {
  try {
    let formData = new FormData();
    const [type, image] = payload;
    formData.append("typeName", type);
    formData.append("image", image);

    const response = await fetch(`${url}/newTypeModel`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
});
