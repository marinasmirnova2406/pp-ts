export function checkLocalesDataInLocalStorage() {
  const localStorageLocale = localStorage.getItem("locale");
  const localStorageLocalization = localStorage.getItem("localization");
  const localStorageCurrency = localStorage.getItem("currency");

  return { localStorageLocale, localStorageLocalization, localStorageCurrency };
}
