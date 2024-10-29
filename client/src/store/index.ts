import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/testSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;