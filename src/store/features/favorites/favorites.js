import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState: [],
  reducers: {
    addToFavoriteList: (state, action) => {
      const isExists = state?.some((item) => item?.id === action?.payload?.id);
      if (isExists) {
        return state;
      } else {
        return [...state, action?.payload];
      }
    },
    removeFromFavoriteList: (state, action) => {
      const isExists = state?.some((item) => item?.id === action?.payload?.id);
      if (isExists) {
        const updatedState = state?.filter(
          (item) => item?.id !== action?.payload?.id
        );
        return [...updatedState];
      } else {
        return state;
      }
    },
  },
});

export const { addToFavoriteList, removeFromFavoriteList } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
