import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadStripe } from "@stripe/stripe-js";

const devUrl = "http://localhost:5002";
const liveUrl = "https://tour-page-nc.herokuapp.com";

const key = `${process.env.STRIPE_KEY}`;
const stripePromise = loadStripe(`${process.env.STRIPE_KEY}`);

export const getAllCategories = createAsyncThunk("GET_CATEGORY", async () => {
  try {
    const response = await fetch(`${liveUrl}/getAllCategories`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
});

export const checkout = createAsyncThunk("CHECKOUT", async (payload) => {
  const stripe = await stripePromise;
  const [tour, quantity] = payload;
  try {
    const response = await fetch(`${liveUrl}/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        package: tour,
        quantity,
      }),
    });
    const data = await response.json();
    console.log(data);
    const result = await stripe.redirectToCheckout({
      sessionId: data,
    });

    if (result.error) alert(result.error.message);
  } catch (err) {
    console.log(err);
  }
});
