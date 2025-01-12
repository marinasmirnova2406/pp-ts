import useTranslations from "../../../hooks/useTranslations";
// Components
import { Modal } from "./Modal";
// Forms
import LoginForm from "../../forms/LoginForm";

const LogInModal = () => {
  const { translations } = useTranslations([
    "forms_and_modal.auth.login",
  ]);

  return (
    <Modal
      styleType=""
      title={translations["forms_and_modal.auth.login"]}
      content={<LoginForm />}
    />
  );
};

export { LogInModal };
