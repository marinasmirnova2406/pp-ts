import React, { useEffect, useState, useCallback  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// Store & Slices
import { RootState } from "../../store/index";
import { setLocale } from "../../store/slices/localesSlice";
// Locale & Translate
import { LOCALES, Locale } from "../../i18n/locales";
// Another
import { useGetCountriesByGroupQuery } from '../../api/countryApi';


interface FormValues {
    language: string;
    country: string;
    currency: string;
    timezone: string;
}

const RegionSettingsForm: React.FC = () => {
  const region = 'Europe';
  const { data, error, isLoading } = useGetCountriesByGroupQuery('Europe', {
    refetchOnFocus: false,
    refetchOnMountOrArgChange: false,
  });


    const dispatch = useDispatch();
    const currentLocale = useSelector((state: RootState) => state.locales.locale);
    const currentLocalization = useSelector((state: RootState) => state.locales.localization);

    const [loading, setLoading] = useState<boolean>(true);

    const languages = [
        { name: "English", code: LOCALES.ENGLISH },
        { name: "Polska", code: LOCALES.POLISH },
        { name: "Українська", code: LOCALES.UKRAINIAN },
        { name: "Русский", code: LOCALES.RUSSIAN },
      ];

      // useEffect(() => {
      //   const fetchCountries = async () => {
      //     try {
      //       // const countryData = await getCountryNames();
      //       console.log("Data:", countryData);
            
      //       // setCountries(countryData);
      //       // setLoading(false);
      //     } catch (error) {
      //       console.error("Ошибка при получении стран:", error);
      //       setLoading(false);
      //     }
      //   };
    
      //   fetchCountries();
      // }, []);

      useEffect(() => {
        console.log("render");
        console.log(data);
        
        
      }, []);

  const initialValues: FormValues = {
    language: currentLocale,
    country: currentLocalization,
    currency: "",
    timezone: "",
  };

  const validationSchema = Yup.object({
    language: Yup.string(),
    country: Yup.string(),
    currency: Yup.string(),
    timezone: Yup.string(),
  });

  const onSubmit = useCallback((values: FormValues) => {
    const locale = values.language as Locale;
    dispatch(setLocale(locale));
    localStorage.setItem("locale", locale);


    console.log("Form data", values);
  }, [dispatch]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="region-settings-form">
        <div>
          <label htmlFor="language">Language</label>
          <Field as="select" id="language" name="language">
            {languages.map(({ name, code }) => (
              <option key={code} value={code} label={name} />
            ))}
          </Field>
          <ErrorMessage name="language" component="div" />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <Field as="select" id="country" name="country">
            <optgroup label="Europe">

            {languages.map(({ name, code }) => (
              <option key={code} value={code} label={name} />
            ))}



              <option value="cz" label="Czech Republic" />
              <option value="fi" label="Finland" />
              <option value="fr" label="France" />
              <option value="de" label="Germany" />


            </optgroup>
            <optgroup label="North America">
              <option value="us" label="United States" />
              <option value="ca" label="Canada" />
            </optgroup>
            <optgroup label="Asia">
              <option value="jp" label="Japan" />
              <option value="cn" label="China" />
              <option value="in" label="India" />
            </optgroup>
          </Field>
          <ErrorMessage name="country" component="div" />
        </div>

        <div>
          <label htmlFor="currency">Currency</label>
          <Field as="select" id="currency" name="currency">
            <option value="" label="Select a currency" />
            <option value="usd" label="USD" />
            <option value="eur" label="EUR" />
            <option value="gbp" label="GBP" />
            <option value="cad" label="CAD" />
          </Field>
          <ErrorMessage name="currency" component="div" />
        </div>

        <div>
          <label htmlFor="timezone">Time Zone</label>
          <Field as="select" id="timezone" name="timezone">
            <option value="" label="Select a time zone" />
            <option value="utc-8" label="UTC-8 (Pacific Time)" />
            <option value="utc-5" label="UTC-5 (Eastern Time)" />
            <option value="utc+1" label="UTC+1 (Central European Time)" />
            <option value="utc+9" label="UTC+9 (Japan Time)" />
          </Field>
          <ErrorMessage name="timezone" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

const RegionSettingsFormMemoized = React.memo(RegionSettingsForm);

export default RegionSettingsFormMemoized;