import { configureStore } from "@reduxjs/toolkit";
import tourSlice from "../features/tourSlice";

export const store = configureStore({
  reducer: {
    tours: tourSlice,
  },
});

export default store;
