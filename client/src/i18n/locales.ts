export const LOCALES = {
    ENGLISH: 'en-US',
    POLISH: 'pl-PL',
    UKRAINIAN: 'uk-UA',
    RUSSIAN: 'ru-RU',
  } as const;
  
  export type Locale = typeof LOCALES[keyof typeof LOCALES];