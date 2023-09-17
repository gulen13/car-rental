import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null
}

const pendingAction = action => action.type.endsWith('/pending');

const rejectedAction = action => action.type.endsWith('/rejected');

const handlePending = (state) => {
  state.isLoading = true
  state.error = ''
}

const handleRejected = (state, { payload }) => {
  state.isLoading = false
  state.error = payload
}

const handleFetchCarsFulfilled = (state, { payload }) => {
  state.items = payload
  state.error = null;
  state.isLoading = false
}

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, handleFetchCarsFulfilled,)
      .addMatcher(pendingAction, handlePending)
      .addMatcher(rejectedAction, handleRejected)
  },
});

export const carsReducer = carsSlice.reducer;