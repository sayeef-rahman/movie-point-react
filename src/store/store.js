
import { configureStore } from "@reduxjs/toolkit";
import { tmdbSlice } from "./features/movieDataBase/movieDataBase";

export const store = configureStore({
  reducer: {
    tmdb: tmdbSlice,
  },
});