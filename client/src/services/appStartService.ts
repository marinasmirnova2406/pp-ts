import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { LOCALES } from "../i18n/locales";
import getLocaleAndLocalizationFromIP from "../utils/getLocaleAndLocalizationFromIP";
import {
  setLocale,
  setLocalization
} from "../store/slices/localesSlice";
import store from "../store";

export const onAppStartActions = async () => {
  checkLocaleAndLocalization();
};

export const checkLocaleAndLocalization = async () => {
  const localStorageLocale = localStorage.getItem("locale");
  const localStorageLocalization = localStorage.getItem("localization");
  const localStorageCurrency = localStorage.getItem("currency");

  if (!localStorageLocale || !localStorageLocalization) {
    const res = await getLocaleAndLocalizationFromIP();

    if (!localStorageLocale) {
      localStorage.setItem("locale", res.locale);
      store.dispatch(setLocale(res.locale));
    }

    if (!localStorageLocalization) {
      localStorage.setItem("localization", res.localization);
      store.dispatch(setLocalization(res.localization));
    }
  }
};
