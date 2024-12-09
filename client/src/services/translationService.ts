import axios from "axios";
import store, { RootState } from "../store/index";
import { LOCALES } from "../i18n/locales";
import { flattenTranslations } from "../utils/flattenTranslations";

const API_URL = "http://localhost:5000/api";

type Translations = Record<string, string>;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

export const fetchTranslations = async (lang: string, keys: string[]) => {
  const response = await axios.get(`${API_URL}/translations`, {
    params: {
      lang,
      keys: keys.join(","),
    },
  });

  return response.data;
};

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------



// isAuto - в будущем при true - при отсутствии готового первода делать его автоматически через сторонние сервисі
export const doTranslations = async (keys: string[], isAuto: boolean) => {
  const currentLocale = (store.getState() as RootState).region.locale
    .substring(0, 2)
    .toLowerCase();

  const keysCopy = JSON.parse(JSON.stringify(keys));

  const result: Record<string, string> = {};

  const translations: Translations = flattenTranslations(
    require(`../i18n/locales/${currentLocale}`)
  );

  keysCopy.forEach((key: string) => {
    const translation = translations[key];

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
    const enTranslations: Translations = flattenTranslations(
      require(`../i18n/locales/${"en"}`)
    );

    if (!result[key]) {
      result[key] = enTranslations?.[key] || "";
    }
  });

  return result;
};


// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
