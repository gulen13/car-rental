import { combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./carsSlice";
import { favoriteReducer } from "./favoriteSlice";

export const reducer = combineReducers(
  {
    cars: carsReducer,
    favorite: favoriteReducer,
  }
)