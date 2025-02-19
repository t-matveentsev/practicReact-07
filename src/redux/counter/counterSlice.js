import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  counter: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += state.step;
    },
    decrement: (state, action) => {
      state.counter -= state.step;
    },
    reset: (state, action) => {
      return initialState;
    },
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const counterReducer = slice.reducer;
export const { increment, decrement, reset, changeStep } = slice.actions;
