import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Header } from "../components/Header/Header";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
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
