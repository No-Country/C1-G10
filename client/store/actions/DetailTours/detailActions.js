import { createAsyncThunk } from "@reduxjs/toolkit";


export const getAllDetails = createAsyncThunk("GET_DETAILS", async (payload) => {
  try {
    const [id] = payload ;
    const response = await fetch(`http://localhost:5002/getAPackage/${id}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
) 
    const data = await response.json(); 
    return data;
  } catch (err) {
    console.log(err);
  }
});
