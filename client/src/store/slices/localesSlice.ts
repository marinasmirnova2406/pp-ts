import { createSlice } from "@reduxjs/toolkit";
import { LOCALES, Locale } from "../../i18n/locales";
import { checkLocalesDataInLocalStorage } from "../../utils/helpersToStorage";
import { mapCountryCodeToLocale } from "../../utils/getLocaleAndLocalizationFromIP";

interface LocatesState {
    localization: string;
    locale: Locale;
    currency: string;
}

const { localStorageLocale, localStorageLocalization, localStorageCurrency } = checkLocalesDataInLocalStorage();
const initialState: LocatesState = {
    localization: localStorageLocalization || "en",
    locale: localStorageLocale ? mapCountryCodeToLocale(localStorageLocale.substring(0, 2).toUpperCase()) : LOCALES.ENGLISH,
    currency: localStorageCurrency || "USD"
};

const locatesSlice = createSlice({
  name: "locates",
  initialState,
  reducers: {
    setLocale(state, action) {
        state.locale = action.payload;
      },
    setLocalization(state, action) {
        state.localization = action.payload;
    },
    setCurrency(state, action) {
      state.currency = action.payload;
  },
  },
});

export const { setLocale, setLocalization, setCurrency } = locatesSlice.actions;
export default locatesSlice.reducer;
