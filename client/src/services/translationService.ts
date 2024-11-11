import axios from "axios";
import store, { RootState } from "../store/index";
import { LOCALES } from '../i18n/locales';
import { messages } from '../i18n/messages'

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

    keysCopy.forEach((key: string)  => {
      const translation = messages[currentLocale]?.[key];
  
      if (translation) {
        result[key] = translation;
        const index = keysCopy.indexOf(key);
        if (index > -1) {
          keysCopy.splice(index, 1);
        }
      }
    });

    if (keysCopy.length > 0) {
      const response = await fetchTranslations(currentLocale.substring(0, 2).toLowerCase(), keysCopy);
  
      keysCopy.forEach((key: string, index: number) => {
        const apiTranslation = response[key];
        if (apiTranslation) {
          result[key] = apiTranslation;
        }
      });
    }

    keysCopy.forEach((key: string) => {
      if (!result[key]) {
        const fallbackTranslation = messages[LOCALES.ENGLISH]?.[key] || '';
        result[key] = fallbackTranslation;
      }
    });


  return result;
};
