import React from 'react';
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Link } from 'react-router-dom';
import { Header } from "../components/Header/Header";
import { Locale } from "../i18n/locales";

type LayoutProps = {
  currentLocale: Locale;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Layout: React.FC<LayoutProps> = ({ handleChange }) => {

  const currentLocale = useSelector((state: RootState) => state.locales.locale);





  return (
    <div>
      <Header currentLocale={currentLocale} handleChange={handleChange} />
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test-page">Test Page</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export { Layout };