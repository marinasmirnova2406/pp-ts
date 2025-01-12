import React from "react";
import useTranslations from "../../../hooks/useTranslations";
// Components
import { Modal } from "./Modal";
// Forms
import RegisterForm from "../../forms/RegisterForm";

const RegisterModal = () => {
  const { translations } = useTranslations([
    "forms_and_modal.auth.register",
  ]);

  return (
    <Modal
      styleType=""
      title={translations["forms_and_modal.auth.register"]}
      content={<RegisterForm />}
    />
  );
};

export { RegisterModal };
