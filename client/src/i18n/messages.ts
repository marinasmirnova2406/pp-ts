import { LOCALES } from './locales';

export const messages: Record<string, Record<string, string>> = {
  [LOCALES.ENGLISH]: {
    "btn.login": "Login",
    "btn.sign_up": "Sign Up",
    "btn.exit": "Exit",
    "test.msg": "Contains in massages.ts",
  },
  [LOCALES.POLISH]: {
    "btn.login":  "Logowanie",
    "btn.sign_up": "Zarejestruj Się",
    "btn.exit": "Wyloguj się",
    // "test.msg": "Zawiera w massages.ts",
  },
  [LOCALES.UKRAINIAN]: {
    "btn.login": "Увійти",
    "btn.sign_up": "Зареєструватись",
    "btn.exit": "Вийти",
    "test.msg": "Знаходиться і massages.ts",
  },
  [LOCALES.RUSSIAN]: {
    "btn.login": "Войти",
    "btn.sign_up": "Зарегистрироваться",
    "btn.exit": "Выйти",
    // "test.msg": "Содержится в massages.ts",
  },
};