import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { LOCALES, Locale } from "../../i18n/locales";
import { FormattedMessage } from "react-intl";
import { setLocale } from "../../store/slices/localesSlice";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const currentLocale1 = useSelector(
    (state: RootState) => state.locales.locale
  );

  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Polska", code: LOCALES.POLISH },
    { name: "Українська", code: LOCALES.UKRAINIAN },
    { name: "Русский", code: LOCALES.RUSSIAN },
  ];

  const handleChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value as Locale;
    dispatch(setLocale(locale));
    localStorage.setItem("locale", locale);
  };

  return (
    <header>
      <div className="switcher">
        Languages{" "}
        <select onChange={handleChange1} value={currentLocale1}>
          {languages.map(({ name, code }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <FormattedMessage id="btn.login" />
    </header>
  );
};
