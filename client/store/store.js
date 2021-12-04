import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import destinationSlice from "./reducers/destinationReducer";
import typeSlice from "./reducers/typeReducer";

export const store = configureStore({
  reducer: {
    destinations: destinationSlice,
    types: typeSlice,
  },
});

export default store;
