import { LOCALES } from './locales';

export const messages: Record<string, Record<string, string>> = {
  [LOCALES.ENGLISH]: {
    "btn.login": "Login",
    "btn.sign_up": "Sign Up",
    "btn.exit": "Exit",
  },
  [LOCALES.POLISH]: {
    "btn.login":  "Logowanie",
    "btn.sign_up": "Zarejestruj Się",
    "btn.exit": "Wyloguj się",
  },
  [LOCALES.UKRAINIAN]: {
    "btn.login": "Увійти",
    "btn.sign_up": "Зареєструватись",
    "btn.exit": "Вийти",
  },
  [LOCALES.RUSSIAN]: {
    "btn.login": "Войти",
    "btn.sign_up": "Зарегистрироваться",
    "btn.exit": "Выйти",
  },
};