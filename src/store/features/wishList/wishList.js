import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: null,
  reducers: {
    getWishList: (state) => {
      return state;
    },
    updateWishList: (state, payload) => {
      return { state, payload };
    },
    removeFromWishList: (state, payload) => {
      return { state, payload };
    },
  },
});

export const { getWishList, updateWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
