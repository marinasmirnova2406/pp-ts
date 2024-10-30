import React from "react";
import { LOCALES, Locale } from "../../i18n/locales";
import { FormattedMessage } from 'react-intl'

interface HeaderProps {
    currentLocale: Locale;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }

export const Header: React.FC<HeaderProps> = ({ currentLocale, handleChange }) => {
  return (
    <header>
      <select value={currentLocale} onChange={handleChange}>
        <option value={LOCALES.ENGLISH}>English</option>
        <option value={LOCALES.POLISH}>Polish</option>
        <option value={LOCALES.UKRAINIAN}>Ukrainian</option>
        <option value={LOCALES.RUSSIAN}>Russian</option>
      </select>
      <FormattedMessage id="btn.login" />
    </header>
  );
};