import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { RootState } from "./store/index";
//Pages
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home/Home";
import { MyTrips } from "./pages/MyTrips/MyTrips";
import { TravelInspirations } from "./pages/TravelInspirations/TravelInspirations";
import { TravelGuide } from "./pages/TravelGuide/TravelGuide";
import { Notfound } from "./pages/Notfound/Notfound";
// Locatess
import { IntlProvider } from "react-intl";
import { LOCALES, Locale } from "./i18n/locales";
import { messages } from "./i18n/messages";
// Another
import { onAppStartActions } from "./services/appStartService";

const App: React.FC = () => {
  const currentLocale = useSelector((state: RootState) => state.region.locale);

  useEffect(() => {
    onAppStartActions();
  }, []);

  function getInitialLocale(): Locale {
    const savedLocale = localStorage.getItem("locale") as Locale;
    console.log(savedLocale);

    return savedLocale || LOCALES.ENGLISH;
  }

  return (
    // @ts-ignore
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="/travel-inspirations" element={<TravelInspirations />} />
          <Route path="/travel-guide" element={<TravelGuide />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </IntlProvider>
  );
};

export default App;
