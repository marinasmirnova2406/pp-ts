import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { LOCALES } from "../i18n/locales";
import getLocaleAndLocalizationFromIP from "../utils/getLocaleAndLocalizationFromIP";
import { findDefaultCurrencyByCountryCode } from "../utils/findDefaultCurrencyByCountryCode";
import { timeZoneApi } from "../api/timeZoneApi";
import { findTimeZoneByCountryCode } from "../utils/findTimeZoneByCountryCode";
import {
  setLocale,
  setLocalization,
  setCurrency,
  setTimeZone,
} from "../store/slices/regionSlice";
import store from "../store";
import { closeModal } from "../store/slices/modalSlice";

export const onAppStartActions = async () => {
  await checkLocaleAndLocalization();
  await checkCurrency();
  await checkTimeZone();

  store.dispatch(closeModal());
};

export const checkLocaleAndLocalization = async () => {
  const localStorageLocale = localStorage.getItem("locale");
  const localStorageLocalization = localStorage.getItem("localization");

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

export const checkCurrency = async () => {
  const localStorageLocalization = localStorage.getItem("localization");
  const localStorageCurrency = localStorage.getItem("currency");

  if (
    localStorageLocalization &&
    typeof localStorageLocalization === "string" &&
    !localStorageCurrency
  ) {
    const defaultCurrency = await findDefaultCurrencyByCountryCode(
      localStorageLocalization
    );

    if (typeof defaultCurrency === "string") {
      localStorage.setItem("currency", defaultCurrency);
      store.dispatch(setCurrency(defaultCurrency));
    }
  }
};

export const checkTimeZone = async () => {
  const localStorageLocalization = localStorage.getItem("localization");
  const localStorageTimeZone = localStorage.getItem("time-zone");

  if (
    localStorageLocalization &&
    typeof localStorageLocalization === "string" &&
    !localStorageTimeZone
  ) {
    const autoTimeZone = await timeZoneApi();
    const timeZone =
      autoTimeZone !== null
        ? autoTimeZone
        : findTimeZoneByCountryCode(localStorageLocalization);

    if (typeof timeZone === "string") {
      localStorage.setItem("time-zone", timeZone);
      store.dispatch(setTimeZone(timeZone));
    }
  }
};
