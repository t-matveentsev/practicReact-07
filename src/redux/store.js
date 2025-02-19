import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todoReducer } from "./todo/todoSlice";
import { filterReducer } from "./filter/filterSlice";

const persistConfig = {
  key: "counter-persist",
  version: 1,
  storage,
  blacklist: ["step"],
  whitelist: ["counter"],
};

export const store = configureStore({
  reducer: {
    counter: persistReducer(persistConfig, counterReducer),
    todos: todoReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
