import { createAsyncThunk } from "@reduxjs/toolkit";
const devUrl = "http://localhost:5002";
const liveUrl = "https://tour-page-nc.herokuapp.com";

/* POST A CUSTOM PACKAGE */
export const postCustomPackage = createAsyncThunk(
  "POST_CUSTOM_PACKAGE",
  async (_data) => {
    try {
      const response = await fetch(`${liveUrl}/newCustomPackage`, {
        method: "POST",
        body: JSON.stringify(_data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);

/* GET ALL CUSTOM PACKAGES */
export const getAllCustomPackages = createAsyncThunk(
  "GET_CUSTOM_PACKAGES",
  async () => {
    try {
      const response = await fetch(`${liveUrl}/getAllCustomPackages`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);
