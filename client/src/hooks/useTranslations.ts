import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import { doTranslations } from "../services/translationService";



const useTranslations = (keys: string[], ) => {
  const currentLocale = useSelector((state: RootState) => state.locales.locale);
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTranslations = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await doTranslations(keys, false);
        setTranslations(data);
      } catch (err) {
        console.log('Error fetching translations', err);
        setError('Failed to load translations');
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, [currentLocale]);

  return { translations, loading, error };
};

export default useTranslations;
