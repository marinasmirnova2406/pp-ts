import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import useTranslations from "../../hooks/useTranslations";
// Store & Slices
import { closeModal } from "../../store/slices/modalSlice";

interface FormValues {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();

  const { translations } = useTranslations([
    "forms_and_modal.auth.signin",
    "forms_and_modal.auth.email",
    "forms_and_modal.auth.password",
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    dispatch(closeModal());
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">
          {translations["forms_and_modal.auth.email"]}
        </label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">
          {translations["forms_and_modal.auth.password"]}
        </label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">
        {translations["forms_and_modal.auth.signin"]}
      </button>
    </form>
  );
};

export default SignInForm;
