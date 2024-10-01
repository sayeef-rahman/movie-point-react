import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addWishList: (state, action) => {
      const isExists = state?.some((item) => item?.id === action?.payload?.id);
      if (isExists) {
        return state;
      } else {
        return [...state, action?.payload];
      }
    },
    removeFromWishList: (state, action) => {
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

export const { addWishList, removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
