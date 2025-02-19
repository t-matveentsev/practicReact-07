import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, fetchData, editTodo } from "../operations";

const initialState = {
  item: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.item = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.item = state.item.filter((item) => item.id !== action.payload);
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.item.push(action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const item = state.item.find((item) => item.id === action.payload.id);
        item.todo = action.payload.todo;
      });
  },
});

export const todoReducer = slice.reducer;
