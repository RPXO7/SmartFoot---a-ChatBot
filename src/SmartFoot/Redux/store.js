// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../Redux/searchSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
