import { configureStore } from "@reduxjs/toolkit";
import { tmdbSlice } from "./features/movieDataBase/movieDataBase";
import { favoritesSlice } from "./features/favorites/favorites";

export const store = configureStore({
  reducer: {
    tmdb: tmdbSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});
