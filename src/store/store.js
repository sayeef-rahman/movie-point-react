import { configureStore } from "@reduxjs/toolkit";
import { tmdbSlice } from "./features/movieDataBase/movieDataBase";
import { favoritesSlice } from "./features/favorites/favorites";
import { wishListSlice } from "./features/wishList/wishList";

export const store = configureStore({
  reducer: {
    tmdb: tmdbSlice.reducer,
    favorites: favoritesSlice.reducer,
    wishList: wishListSlice.reducer,
  },
});
