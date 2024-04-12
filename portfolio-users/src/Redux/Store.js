import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reSkils } from "./Skils";
import { reProject } from "./Project";

const reducer = combineReducers({
  skils: reSkils,
  project: reProject,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});