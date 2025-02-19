import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../operations";

const initialState = {
  item: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
    },
    addTodo: (state, action) => {
      state.item.push(action.payload);
    },
    editTodo: (state, action) => {
      const item = state.item.find((item) => item.id === action.payload.id);
      item.todo = action.payload.todo;
    },
    fetchDataSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
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
      });
  },
});

export const todoReducer = slice.reducer;
export const {
  deleteTodo,
  addTodo,
  editTodo,
  fetchDataSuccess,
  setIsError,
  setIsLoading,
} = slice.actions;
