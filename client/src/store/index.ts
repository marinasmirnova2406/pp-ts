import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// Slices
import localesReducer from "./slices/localesSlice";
import modalReducer from "./slices/modalSlice";
import userTripsReducer from "./slices/userTripsSlice";
// Api
import { countryApi } from "../api/countryApi";

const rootReducer = combineReducers({
  locales: localesReducer,
  modal: modalReducer,
  userTrips: userTripsReducer,
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
