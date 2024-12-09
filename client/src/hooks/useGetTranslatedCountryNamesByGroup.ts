import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import { useGetCountriesByGroupQuery } from "../api/countryApi";
import { doTranslations } from "../services/translationService";


export const useGetTranslatedCountryNamesByGroup = (
    region: string,
    options?: { refetchOnFocus?: boolean; refetchOnMountOrArgChange?: boolean }
  ) => {

    const currentLocale = useSelector((state: RootState) => state.region.locale);

    const { data: countries, error, isLoading, isFetching } = useGetCountriesByGroupQuery(region, options);
  
    const [translatedCountries, setTranslatedCountries] = useState<
  { country: string; countryCode: string; translationKey: string; countryTranslationName: string }[]
>([]);
  
    useEffect(() => {
      const translateCountries = async () => {
        if (!countries || isLoading || isFetching) return;
  
        try {

          const translationKeys = countries.map((c: any) => c.translationKey);

          const translations = await doTranslations(translationKeys, false);
  
          const translated = countries.map((c: any) => ({
            ...c,
            countryTranslationName: translations[c.translationKey] || c.country,
          }));
  
          setTranslatedCountries(translated);
        } catch (err) {
          console.error("Error translating countries:", err);
        }
      };
  
      translateCountries();
    }, [countries, isLoading, isFetching, currentLocale]);
  
    return { data: translatedCountries, error, isLoading, isFetching };
  };