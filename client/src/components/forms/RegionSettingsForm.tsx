import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import useTranslations from "../../hooks/useTranslations";
// Store & Slices
import { RootState } from "../../store/index";
import {
  setLocale,
  setLocalization,
  setCurrency,
  setTimeZone,
} from "../../store/slices/regionSlice";
import { closeModal } from "../../store/slices/modalSlice";
// Locale & Translate
import { LOCALES, Locale } from "../../i18n/locales";
import { useGetTranslatedCountryNamesByGroup } from "../../hooks/useGetTranslatedCountryNamesByGroup";
// Another
import { findDefaultCurrencyByCountryCode } from "../../utils/findDefaultCurrencyByCountryCode";
import { findTimeZoneByCountryCode } from "../../utils/findTimeZoneByCountryCode";


interface FormValues {
  language: string;
  country: string;
  currency: string;
  timezone: string;
}

const RegionSettingsForm: React.FC = () => {
  const dispatch = useDispatch();
  const currentLocale = useSelector((state: RootState) => state.region.locale);
  const currentLocalization = useSelector(
    (state: RootState) => state.region.localization
  );
  const currentCurrency = useSelector(
    (state: RootState) => state.region.currency
  );
  const currentTimeZone = useSelector(
    (state: RootState) => state.region.timeZone
  );

  const timeZonesCodes: string[] = [
    "UTC-12",
    "UTC-11",
    "UTC-10",
    "UTC-9",
    "UTC-8",
    "UTC-7",
    "UTC-6",
    "UTC-5",
    "UTC-4",
    "UTC-3",
    "UTC-2",
    "UTC-1",
    "UTC+0",
    "UTC+1",
    "UTC+2",
    "UTC+3",
    "UTC+3:30",
    "UTC+4",
    "UTC+4:30",
    "UTC+5",
    "UTC+5:30",
    "UTC+5:45",
    "UTC+6",
    "UTC+6:30",
    "UTC+7",
    "UTC+8",
    "UTC+9",
    "UTC+9:30",
    "UTC+10",
    "UTC+10:30",
    "UTC+11",
    "UTC+12",
    "UTC+12:45",
    "UTC+13",
  ];


  const timeZonesKeys = timeZonesCodes.map((zone) => `region.time-zones.${zone}`);

  const { translations } = useTranslations([
    ...timeZonesKeys, 
    "region_settings.language",
    "region_settings.country",
    "region_settings.currency",
    "region_settings.time_zone",
    "region_settings.change",
  ]
  );

  const { data: europeCountries } = useGetTranslatedCountryNamesByGroup(
    "Europe",
    {
      refetchOnFocus: false,
      refetchOnMountOrArgChange: false,
    }
  );

  const { data: northAmericaCountries } = useGetTranslatedCountryNamesByGroup(
    "North America",
    {
      refetchOnFocus: false,
      refetchOnMountOrArgChange: false,
    }
  );

  const findCountryNameByCountryCode = (countryCode: string) => {
    const allCountries = [
      ...(europeCountries || []),
      ...(northAmericaCountries || []),
    ];

    const countryObj = allCountries.find(
      (country) => country.countryCode === countryCode
    );

    if (countryObj && countryObj.countryCode) {
      return countryObj.countryCode;
    } else {
      return "";
    }
  };

  const [formValues, setFormValues] = useState({
    language: currentLocale,
    country: "",
    currency: currentCurrency,
    timezone: currentTimeZone,
  });

  // -------- languages -------------------------------------------------------

  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Polska", code: LOCALES.POLISH },
    { name: "Українська", code: LOCALES.UKRAINIAN },
    { name: "Русский", code: LOCALES.RUSSIAN },
  ];

  const handleLanguageInputChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const locale = event.target.value as Locale;
    dispatch(setLocale(locale));
    localStorage.setItem("locale", locale);
  };

  // -------- currencies  -------------------------------------------------------

  const currencies = [
    "USD",
    "EUR",
    "GBP",
    "JPY",
    "CHF",
    "CNY",
    "RUB",
    "UAH",
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "AOA",
    "ARS",
    "AUD",
    "AZN",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BND",
    "BOB",
    "BRL",
    "BWP",
    "BYN",
    "CAD",
    "CDF",
    "CLP",
    "COP",
    "CRC",
    "CUP",
    "CZK",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ETB",
    "GEL",
    "GHS",
    "HKD",
    "HRK",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JOD",
    "KES",
    "KGS",
    "KHR",
    "KPW",
    "KRW",
    "KWD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MNT",
    "MRO",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PEN",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "SAR",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SLL",
    "SOS",
    "SRD",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TRY",
    "TWD",
    "TZS",
    "UGX",
    "UYU",
    "UZS",
    "VEF",
    "VND",
    "XAF",
    "XOF",
    "YER",
    "ZAR",
    "ZMK",
  ];

  const createListByCurrencies = (currencies: string[]) => {
    if (currencies) {
      return currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ));
    }
  };

  // -------- time zones  -------------------------------------------------------

  type TimeZoneTranslations = {
    [key: string]: string;
  };

  const createListByTimeZones = (
    timeZonesCodes: string[],
    translations: TimeZoneTranslations
  ) => {
    if (timeZonesCodes) {
      return timeZonesCodes.map((code) => (
        <option key={code} value={code}>
          {code} {translations[`region.time-zones.${code}`]}
        </option>
      ));
    }
  };

  useEffect(() => {
    setFormValues((prevValues) => ({
      ...prevValues,
      language: currentLocale,
    }));
  }, [currentLocale]);

  useEffect(() => {
    const fetchCountryName = async () => {
      const localStorageLocalization = localStorage.getItem("localization");
      if (localStorageLocalization) {
        setFormValues((prevValues) => ({
          ...prevValues,
          country: localStorageLocalization,
        }));
      } else {
        try {
          const countryName = await findCountryNameByCountryCode(
            currentLocalization
          );
          setFormValues((prevValues) => ({
            ...prevValues,
            country: countryName,
          }));
        } catch (error) {
          console.error("Error fetching country name:", error);
        }
      }
    };

    fetchCountryName();
    
  }, [europeCountries, northAmericaCountries]);



  const handleInputChange = async (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (name === "language") {
      const locale = value as Locale;

      dispatch(setLocale(locale));
      localStorage.setItem("locale", locale);
    }

    if (name === "country") {
      const country = value as string;

      const newCurrency = await findDefaultCurrencyByCountryCode(country);

      const newTimeZone = await findTimeZoneByCountryCode(country);

      setFormValues((prevValues) => ({
        ...prevValues,
        country: country,
        currency: newCurrency,
        timezone: newTimeZone,
      }));
    }

    if (name === "currency") {
      const currency = value as string;

      setFormValues((prevValues) => ({
        ...prevValues,
        currency: currency,
      }));
    }

    if (name === "timezone") {
      const timeZone = value as string;

      setFormValues((prevValues) => ({
        ...prevValues,
        timezone: timeZone,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(setLocalization(formValues.country));
    dispatch(setCurrency(formValues.currency));
    dispatch(setTimeZone(formValues.timezone));
    localStorage.setItem("localization", formValues.country);
    localStorage.setItem("currency", formValues.currency);
    localStorage.setItem("time-zone", formValues.timezone);

    dispatch(closeModal());
  };


  return (
    <form className="region-settings-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="language">{translations["region_settings.language"]}</label>
        <select
          id="language"
          name="language"
          value={formValues.language}
          onChange={handleLanguageInputChange}
        >
          {languages.map(({ name, code }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="country">{translations["region_settings.country"]}</label>
        <select
          id="country"
          name="country"
          value={formValues.country}
          onChange={handleInputChange}
        >
          <optgroup label="Europe">
            {europeCountries.map(
              ({ countryCode, countryTranslationName, country }) => (
                <option key={countryCode} value={countryCode}>
                  {countryTranslationName}
                </option>
              )
            )}
          </optgroup>
          <optgroup label="North America">
            {northAmericaCountries.map(
              ({ countryCode, countryTranslationName, country }) => (
                <option key={countryCode} value={countryCode}>
                  {countryTranslationName}
                </option>
              )
            )}
          </optgroup>
        </select>
      </div>

      <div>
        <label htmlFor="currency">{translations["region_settings.currency"]}</label>
        <select
          id="currency"
          name="currency"
          value={formValues.currency}
          onChange={handleInputChange}
        >
          {createListByCurrencies(currencies)}
        </select>
      </div>

      <div>
        <label htmlFor="timezone">{translations["region_settings.time_zone"]}</label>
        <select
          id="timezone"
          name="timezone"
          value={formValues.timezone}
          onChange={handleInputChange}
        >
          {createListByTimeZones(timeZonesCodes, translations)}
        </select>
      </div>

      <button type="submit">{translations["region_settings.change"]}</button>
    </form>
  );
};

const RegionSettingsFormMemoized = React.memo(RegionSettingsForm);

export default RegionSettingsFormMemoized;
