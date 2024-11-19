import i18n from 'i18next';
import { flattenTranslations } from '../utils/flattenTranslations';

const loadTranslations = (lang: string) => {
    try {

      const translations = require(`./locales/${lang}`);
      return flattenTranslations(translations);

    } catch (error) {
        
      console.error(`Ошибка при загрузке переводов для языка ${lang}:`, error);
      return {};
    }
  };

  i18n.init({
    resources: {
      en: loadTranslations('en'),
      pl: loadTranslations('pl'),
      uk: loadTranslations('uk'),
      ru: loadTranslations('ru'),
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;