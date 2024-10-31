import axios from 'axios';
import { LOCALES } from '../i18n/locales'
import getLocaleFromIP from "../utils/getLocaleAndLocalizationFromIP"

const API_URL = 'http://localhost:5000/api';

export const fetchTranslations = async (lang: string, keys: string[]) => {
  const response = await axios.get(`${API_URL}/translations`, {
    params: {
      lang,
      keys: keys.join(','),
    },
  });

  console.log(LOCALES);
  
  return response.data;
};