import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: null,
  reducers: {
    getWishList: (state) => {
      return [];
    },
    updateWishList: (state, payload) => {
      return [];
    },
    removeFromWishList: (state, payload) => {
      return [];
    },
  },
});

export const { getWishList, updateWishList } = wishListSlice.actions;

export default tmdbSlice.reducer;
