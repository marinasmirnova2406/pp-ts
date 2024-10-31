import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/testSlice';
import localesReducer from './slices/localesSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
    locales: localesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
