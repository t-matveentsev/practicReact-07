import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://67b61be207ba6e59083fc291.mockapi.io";

export const fetchData = createAsyncThunk(
  "todos/fetchData",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/tasks");
      return data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const fetchData = () => async (dispatch) => {
//   try {
//     dispatch(setIsError(false));
//     dispatch(setIsLoading(true));
//     const response = await axios.get(
//       "https://67b61be207ba6e59083fc291.mockapi.io/tasks"
//     );
//     dispatch(fetchDataSuccess(response.data));
//   } catch {
//     dispatch(setIsError(true));
//   } finally {
//     dispatch(setIsLoading(false));
//   }
// };
