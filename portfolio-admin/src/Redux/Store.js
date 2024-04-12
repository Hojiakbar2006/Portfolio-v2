import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reAlert } from "./Alert";
import { reProject } from "./Project";
import { reFeedback } from "./Feedback";

const reducer = combineReducers({
  alert: reAlert,
  project: reProject,
  feedback: reFeedback,
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
