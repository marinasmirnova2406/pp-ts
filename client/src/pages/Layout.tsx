import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Header } from "../components/primary/Header/Header";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />


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
