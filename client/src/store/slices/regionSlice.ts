import { createSlice } from "@reduxjs/toolkit";
import { LOCALES, Locale } from "../../i18n/locales";
import { checkLocalesDataInLocalStorage } from "../../utils/helpersToStorage";
import { mapCountryCodeToLocale } from "../../utils/getLocaleAndLocalizationFromIP";

interface RegionState {
  localization: string;
  locale: Locale;
  currency: string;
  timeZone: string;
}

const getInitialLocatesState = (): RegionState => {
  const { localStorageLocale, localStorageLocalization, localStorageCurrency, localStorageTimeZone } =
    checkLocalesDataInLocalStorage();

  return {
    localization: localStorageLocalization || "en",
    locale: localStorageLocale
      ? mapCountryCodeToLocale(localStorageLocale.substring(0, 2).toUpperCase())
      : LOCALES.ENGLISH,
    currency: localStorageCurrency || "USD",
    timeZone: localStorageTimeZone || "utc+1"
  };
};

const initialState: RegionState = getInitialLocatesState();

const regionSlice = createSlice({
  name: "region",
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
    setTimeZone(state, action) {
      state.timeZone = action.payload;
    },
  },
});

export const { setLocale, setLocalization, setCurrency, setTimeZone } = regionSlice.actions;
export default regionSlice.reducer;
