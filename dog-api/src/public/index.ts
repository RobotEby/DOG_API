import { configureStore } from '@reduxjs/toolkit';
import dogReducer from './dogReducer';

export const store = configureStore({
  reducer: dogReducer,
});
