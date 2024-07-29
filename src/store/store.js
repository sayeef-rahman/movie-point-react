import { configureStore } from "@reduxjs/toolkit";
import { tmdbSlice } from "./features/movieDataBase/movieDataBase";
import { wishListSlice } from "./features/wishList/wishList";

export const store = configureStore({
  reducer: {
    tmdb: tmdbSlice,
    wishList: wishListSlice,
  },
});
