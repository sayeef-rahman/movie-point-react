import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres: {},
};

export const tmdbSlice = createSlice({
  name: "tmdb",
  initialState,
  reducers: {
    getApiConfigaration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfigaration, getGenres } = tmdbSlice.actions;

export default tmdbSlice.reducer;
