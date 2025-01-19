"use client";

import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./features/profile-slice";
export const store = () => {
  return configureStore({
    reducer: {
      profile: profileSlice,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
