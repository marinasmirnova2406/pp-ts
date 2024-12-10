import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import useTranslations from "../../../hooks/useTranslations";
// Store & Slices
import { RootState } from "../../../store/index";
import { setLocale } from "../../../store/slices/regionSlice";
// Components
import { ImageAndTextLogotype } from "../logotypes/ImageAndTextLogotype";
import { MyTripsNavLinks } from "./MyTripsNavLinks";
import { RegionSettings } from './RegionSettings';
import { UserPanel } from './UserPanel';
// Locale & Translate
import { LOCALES, Locale } from "../../../i18n/locales";
import { FormattedMessage } from "react-intl";
// Another

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  const { translations, loading, error } = useTranslations([
    "header.travel_inspirations",
    "header.travel_guide"
  ]);

  


 



  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Polska", code: LOCALES.POLISH },
    { name: "Українська", code: LOCALES.UKRAINIAN },
    { name: "Русский", code: LOCALES.RUSSIAN },
  ];


  return (
    <header className="header">
      <NavLink to="/" end>

        <ImageAndTextLogotype />
      </NavLink>

      <MyTripsNavLinks />

      <NavLink to="/travel-inspirations" end>
        <span className="header__link">{translations["header.travel_inspirations"]}</span>
      </NavLink>

      <NavLink to="/travel-guide" end>
        <span className="header__link">{translations["header.travel_guide"]}</span>
      </NavLink>

      <RegionSettings />

      <UserPanel />

    </header>
  );
};
