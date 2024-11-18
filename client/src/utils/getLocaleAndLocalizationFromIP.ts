import axios from "axios";
import { LOCALES, Locale } from "../i18n/locales";

interface LocaleData {
  localization: string;
  locale: Locale;
}

export default async function getLocaleAndLocalizationFromIP(): Promise<LocaleData> {
  try {
    const response = await axios.get("http://ip-api.com/json");

    const countryCode: string = response.data.countryCode;

    return {
      localization: countryCode,
      locale: mapCountryCodeToLocale(countryCode),
    };
  } catch (error) {
    console.error("Ошибка при получении локали по IP:", error);
    return {
      localization: "en",
      locale: LOCALES.ENGLISH,
    };
  }
}

export function mapCountryCodeToLocale(countryCode: string): Locale {
  switch (countryCode) {
    case "PL":
      return LOCALES.POLISH;
    case "UA":
      return LOCALES.UKRAINIAN;
    case "RU":
      return LOCALES.RUSSIAN;
    default:
      return LOCALES.ENGLISH;
  }
}

