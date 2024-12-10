import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const UserBurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-burger-menu">
      <button
        className={`user-burger-menu__toggle ${
          isOpen ? "user-burger-menu__toggle--open" : ""
        }`}
        onClick={toggleMenu}
      >

        <div className="user-burger-menu__toggle__line"></div>
        <div className="user-burger-menu__toggle__line"></div>
        <div className="user-burger-menu__toggle__line"></div>
      </button>

      <nav
        className={`user-burger-menu__nav ${
          isOpen ? "user-burger-menu__nav--open" : ""
        }`}
      >
        <ul>
          <li>
            <NavLink to="/" className="user-burger-menu__link" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="user-burger-menu__link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="user-burger-menu__link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="user-burger-menu__link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { UserBurgerMenu };