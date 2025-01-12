import React from "react";
import useTranslations from "../../../hooks/useTranslations";
// Components
import { Modal } from "./Modal";
// Forms
import SignInForm from "../../forms/SignInForm";

const SignInModal = () => {
  const { translations } = useTranslations([
    "forms_and_modal.auth.signin",
  ]);

  return (
    <Modal
      styleType=""
      title={translations["forms_and_modal.auth.signin"]}
      content={<SignInForm />}
    />
  );
};

export { SignInModal };
