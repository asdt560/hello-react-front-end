import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greetingSlice';

const store = configureStore({
  reducer: {
    greetingReducer,
  },
});

export default store;
