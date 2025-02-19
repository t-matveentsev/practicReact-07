import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [{ id: 1, todo: "Learn redux", isCompleted: false }],
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
  },
});

export const todoReducer = slice.reducer;
export const { deleteTodo, addTodo, editTodo } = slice.actions;
