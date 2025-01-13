import React from "react";
import useTranslations from "../../../hooks/useTranslations";
// Components
import { Modal } from "./Modal";
// Forms
import RegistrationForm from "../../forms/RegistrationForm";

const RegisterModal = () => {
  const { translations } = useTranslations([
    "forms_and_modal.auth.register",
  ]);

  return (
    <Modal
      styleType=""
      title={translations["forms_and_modal.auth.register"]}
      content={<RegistrationForm />}
    />
  );
};

export { RegisterModal };
