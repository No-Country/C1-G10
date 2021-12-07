import { configureStore } from "@reduxjs/toolkit";
import destinationSlice from "./reducers/destinationReducer";
import typeSlice from "./reducers/typeReducer";
import categorySlice from "./reducers/categoryReducer";
import packagesSlice from "./reducers/packageReducer";
import customPackagesSlice from "./reducers/customPackageReducer";

export const store = configureStore({
  reducer: {
    destinations: destinationSlice,
    types: typeSlice,
    categories: categorySlice,
    packages: packagesSlice,
    customPackages: customPackagesSlice
  },
});

export default store;
