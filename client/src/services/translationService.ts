import axios from "axios";
import store, { RootState } from "../store/index";
import { LOCALES } from "../i18n/locales";
import { messages } from "../i18n/messages";

const API_URL = "http://localhost:5000/api";

export const fetchTranslations = async (lang: string, keys: string[]) => {
  const response = await axios.get(`${API_URL}/translations`, {
    params: {
      lang,
      keys: keys.join(","),
    },
  });

  return response.data;
};

// isAuto - в будущем при true - при отсутствии готового первода делать его автоматически через сторонние сервисі
export const doTranslations = async (keys: string[], isAuto: boolean) => {
  const currentLocale = (store.getState() as RootState).locales.locale;

  const keysCopy = JSON.parse(JSON.stringify(keys));

  const result: Record<string, string> = {};

  keysCopy.forEach((key: string) => {
    const translation = messages[currentLocale]?.[key];
    if (translation) {
      result[key] = translation;
    }
  });

  const missingKeys = keysCopy.filter((key: string) => !(key in result));

  if (missingKeys.length > 0) {
    try {
      const response = await fetchTranslations(
        currentLocale.substring(0, 2).toLowerCase(),
        missingKeys
      );
      missingKeys.forEach((key: string) => {
        const apiTranslation = response[key];
        if (apiTranslation) {
          result[key] = apiTranslation;
        }
      });
    } catch (error) {
      console.error("API Error, continuing with fallback translations:", error);
    }
  }

  keys.forEach((key) => {
    if (!result[key]) {
      result[key] = messages[LOCALES.ENGLISH]?.[key] || "";
    }
  });

  return result;
};
