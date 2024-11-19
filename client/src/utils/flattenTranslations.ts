export const flattenTranslations = (translations: any) => {
  const result: Record<string, string> = {};

  const translationsObj = translations.default;

  for (const key in translationsObj) {
    if (translationsObj.hasOwnProperty(key)) {
      const value = translationsObj[key];

      if (typeof value === "object" && value !== null) {
        Object.entries(value as Record<string, string>).forEach(
          ([nestedKey, nestedValue]) => {
            result[nestedKey] = nestedValue;
          }
        );
      }
    }
  }

  return result;
};
