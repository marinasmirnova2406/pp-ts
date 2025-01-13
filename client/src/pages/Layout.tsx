import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Header } from "../components/primary/Header/Header";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />


      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export { Layout };
