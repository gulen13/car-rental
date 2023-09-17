import { combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./carsSlice";

export const reducer = combineReducers(
  {
    cars: carsReducer,
  }
)