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

export const newCategory = createAsyncThunk(
  "category/new",
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    try {
      const [categoryName] = payload;
      const response = await fetch(`${url}/newcategoryModel`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          categoryName,
        }),
      });
      if (!response.ok) return rejectWithValue(response.status);
      const data = await response.json();
      return fulfillWithValue(data);
    } catch (err) {
      return err;
    }
  }
);
