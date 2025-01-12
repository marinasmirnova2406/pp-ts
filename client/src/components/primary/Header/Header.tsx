import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import useTranslations from "../../../hooks/useTranslations";
// Store & Slices
import { RootState } from "../../../store/index";
import { openModal } from "../../../store/slices/modalSlice";
// Components
import { Button } from "../../common/Button/Button";
import { ImageAndTextLogotype } from "../logotypes/ImageAndTextLogotype";
import { MyTripsNavLinks } from "./MyTripsNavLinks";
import { RegionSettings } from "./RegionSettings";
import { UserPanel } from "./UserPanel";
import { SignInModal } from "../../common/Modal/SignInModal";
import { RegisterModal } from "../../common/Modal/RegisterModal";
// Another

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  const openModalType = useSelector(
    (state: RootState) => state.modal.openModal
  );
  const user = useSelector((state: RootState) => state.auth.user);

  const { translations, loading, error } = useTranslations([
    "header.travel_inspirations",
    "header.travel_guide",
    "header.logIn",
    "header.signIn",
  ]);

  const handleOpenModal = (modalType: "SignIn" | "Register") => {
    dispatch(openModal(modalType));
  };

  return (
    <header className="header">
      <NavLink to="/" end>
        <ImageAndTextLogotype />
      </NavLink>

      <MyTripsNavLinks />

      <NavLink to="/travel-inspirations" end>
        <span className="header__link">
          {translations["header.travel_inspirations"]}
        </span>
      </NavLink>

      <NavLink to="/travel-guide" end>
        <span className="header__link">
          {translations["header.travel_guide"]}
        </span>
      </NavLink>

      <RegionSettings />

      {user ? (
        <UserPanel />
      ) : (
        <>
          {" "}
          <div className="header__auth_buttons">
            <Button
              additionalClass="header__auth_buttons__login"
              clickFunction={() => handleOpenModal("SignIn")}
              content={translations["header.logIn"]}
            />
            <Button
              additionalClass="header__auth_buttons__register"
              clickFunction={() => handleOpenModal("Register")}
              content={translations["header.register"]}
            />
          </div>
          {openModalType === "SignIn" ? <SignInModal /> : null}
          {openModalType === "Register" ? <RegisterModal /> : null}
        </>
      )}
    </header>
  );
};
