import axios from 'axios';
import { LOCALES, Locale } from '../i18n/locales';

async function getLocaleFromIP(): Promise<Locale> {
  try {
    const response = await axios.get('http://ip-api.com/json');
    const countryCode: string = response.data.countryCode;
    return mapCountryCodeToLocale(countryCode);
  } catch (error) {
    console.error('Ошибка при получении локали по IP:', error);
    return LOCALES.ENGLISH;
  }
}

function mapCountryCodeToLocale(countryCode: string): Locale {
  switch (countryCode) {
    case 'PL':
      return LOCALES.POLISH;
    case 'UA':
      return LOCALES.UKRAINIAN;
    case 'RU':
      return LOCALES.RUSSIAN;
    default:
      return LOCALES.ENGLISH;
  }
}

export default getLocaleFromIP;