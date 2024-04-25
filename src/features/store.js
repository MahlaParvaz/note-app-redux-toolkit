import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/todosSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
