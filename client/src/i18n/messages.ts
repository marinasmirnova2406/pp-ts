import { LOCALES } from './locales';

export const messages: Record<string, Record<string, string>> = {
  [LOCALES.ENGLISH]: {
    // Header
    "my_trips": "My Trips",
    "create_trip": "Create",
    "travel_inspirations": "Travel Inspirations",
    "travel_guide": "Travel Guide",
    // ---
    "btn.login": "Login",
    "btn.sign_up": "Sign Up",
    "btn.exit": "Exit",
    "test.msg": "Contains in massages.ts",
  },
  [LOCALES.POLISH]: {
    // Header
    "my_trips": "Moje Podróże",
    "create_trip": "Stwórz",
    "travel_inspirations": "Inspiracje Podróżnicze",
    "travel_guide": "Przewodnik",
    // ---
    "btn.login":  "Logowanie",
    "btn.sign_up": "Zarejestruj Się",
    "btn.exit": "Wyloguj się",
    // "test.msg": "Zawiera w massages.ts",
  },
  [LOCALES.UKRAINIAN]: {
    // Header
    "my_trips": "Мої Подорожі",
    "create_trip": "Створити",
    "travel_inspirations": "Ідеї для подорожі",
    "travel_guide": "Путівник",
    // ---
    "btn.login": "Увійти",
    "btn.sign_up": "Зареєструватись",
    "btn.exit": "Вийти",
    "test.msg": "Знаходиться і massages.ts",
  },
  [LOCALES.RUSSIAN]: {
    // Header
    "my_trips": "Мои путешествия",
    "create_trip": "Создать",
    "travel_inspirations": "Идеи для путешествий",
    "travel_guide": "Путеводитель",
    // ---
    "btn.login": "Войти",
    "btn.sign_up": "Зарегистрироваться",
    "btn.exit": "Выйти",
    // "test.msg": "Содержится в massages.ts",
  },
};