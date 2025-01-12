import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// Slices
import regionReducer from "./slices/regionSlice";
import modalReducer from "./slices/modalSlice";
import userTripsReducer from "./slices/userTripsSlice";
import authReducer from "./slices/authSlice";
// Api
import { countryApi } from "../api/countryApi";

const rootReducer = combineReducers({
  region: regionReducer,
  modal: modalReducer,
  userTrips: userTripsReducer,
  auth: authReducer,
  [countryApi.reducerPath]: countryApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    })
    .concat(countryApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
