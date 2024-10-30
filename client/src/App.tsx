import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//Pages
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home/Home";
import { Notfound } from "./pages/Notfound/Notfound";
import { TestPage } from "./pages/TestPage/TestPage";
// Locates
import { IntlProvider } from 'react-intl';
import { LOCALES, Locale } from "./i18n/locales";
import { messages } from "./i18n/messages";
import getLocaleFromIP from "./utils/getLocale";

const App: React.FC = () => {
  const [currentLocale, setCurrentLocale] = useState<Locale>(getInitialLocale());


  useEffect(() => {
    if (!localStorage.getItem("locale")) {
      getLocaleFromIP().then((locale) => setCurrentLocale(locale as Locale));
    }
  }, []);

  function getInitialLocale(): Locale {
    const savedLocale = localStorage.getItem("locale") as Locale;
    return savedLocale || LOCALES.ENGLISH;
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value as Locale;
    setCurrentLocale(locale);
    localStorage.setItem("locale", locale);
  };

  return (
    // @ts-ignore
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <Routes>
        <Route path="/" element={<Layout currentLocale={currentLocale} handleChange={handleChange} />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/test-page" element={<TestPage />} />
        </Route>
      </Routes>
    </IntlProvider>
  );
};

export default App;
