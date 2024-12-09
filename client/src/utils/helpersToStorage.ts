export function checkLocalesDataInLocalStorage() {
  const localStorageLocale = localStorage.getItem("locale");
  const localStorageLocalization = localStorage.getItem("localization");
  const localStorageCurrency = localStorage.getItem("currency");
  const localStorageTimeZone = localStorage.getItem("timeZone");

  return { localStorageLocale, localStorageLocalization, localStorageCurrency, localStorageTimeZone };
}
