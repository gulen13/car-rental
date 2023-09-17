import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addToFavorites(state, action) {
      return state = [...state, action.payload];
    },
    removeFromFavorites(state, action) {
      return state = state.filter(car => car !== action.payload);
    },
  }
});
export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;