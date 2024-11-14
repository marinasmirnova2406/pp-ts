import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import useTranslations from "../../../hooks/useTranslations";
// Store & Slices
import { RootState } from "../../../store/index";
import { setLocale } from "../../../store/slices/localesSlice";
// Components
import { ImageAndTextLogotype } from "../logotypes/ImageAndTextLogotype";
import { MyTripsNavLinks } from "./MyTripsNavLinks";
// Locale & Translate
import { LOCALES, Locale } from "../../../i18n/locales";
import { FormattedMessage } from "react-intl";
// Another

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  const { translations, loading, error } = useTranslations([
    "travel_inspirations",
    "travel_guide"
  ]);

  const currentLocale = useSelector((state: RootState) => state.locales.locale);

 



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
    <header className="header">
      <NavLink to="/" end>
        <ImageAndTextLogotype />
      </NavLink>

      <MyTripsNavLinks />

      <NavLink to="/travel-inspirations" end>
        <span className="header__link">{translations["travel_inspirations"]}</span>
      </NavLink>

      <NavLink to="/travel-guide" end>
        <span className="header__link">{translations["travel_guide"]}</span>
      </NavLink>







      <div className="switcher">
        Languages{" "}
        <select onChange={handleChange1} value={currentLocale}>
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
