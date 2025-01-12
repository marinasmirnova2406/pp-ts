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
        "forms_and_modal.auth.email",
        "forms_and_modal.auth.password",
        "forms_and_modal.auth.username",
        "forms_and_modal.auth.gender",
        "forms_and_modal.auth.date_of_birth",
        "forms_and_modal.auth.first_name",
        "forms_and_modal.auth.last_name",
        "forms_and_modal.auth.confirm_password",
        "forms_and_modal.auth.gender.male",
        "forms_and_modal.auth.gender.female",
        "forms_and_modal.auth.gender.another",
        "forms_and_modal.auth.gender.not_specified",
        "forms_and_modal.auth.policy_acceptance",
        "forms_and_modal.auth.email_acceptance",
        "forms_and_modal.auth.create_profile"
      ]
      );


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    dispatch(closeModal());
  };


  return (
    <form className="signin-form" onSubmit={handleSubmit}>

<div>
        <label htmlFor="firstName">{translations["forms_and_modal.auth.first_name"]}</label>
        <input type="text" id="firstName" name="firstName" required />
      </div>
      <div>
        <label htmlFor="lastName">{translations["forms_and_modal.auth.last_name"]}</label>
        <input type="text" id="lastName" name="lastName" required />
      </div>


      <div>
        <label htmlFor="username">{translations["forms_and_modal.auth.username"]}</label>
        <input type="text" id="username" name="username" required />
      </div>

      <div>
        <label htmlFor="birthDate">{translations["forms_and_modal.auth.date_of_birth"]}</label>
        <input type="date" id="birthDate" name="birthDate" required />
      </div>

      <div>
        <label>{translations["forms_and_modal.auth.gender"]}</label>
        <div>
          <label>
            <input type="radio" name="gender" value="male" /> {translations["forms_and_modal.auth.gender.male"]}
          </label>
          <label>
            <input type="radio" name="gender" value="female" /> {translations["forms_and_modal.auth.gender.female"]}
          </label>
          <label>
            <input type="radio" name="gender" value="another" /> {translations["forms_and_modal.auth.gender.another"]}
          </label>
          <label>
            <input type="radio" name="gender" value="not-specified" required /> {translations["forms_and_modal.auth.gender.not_specified"]}
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="email">{translations["forms_and_modal.auth.email"]}</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div>
        <label htmlFor="password">{translations["forms_and_modal.auth.password"]}</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div>
        <label htmlFor="confirmPassword">{translations["forms_and_modal.auth.confirm_password"]}</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />
      </div>

      <div>
        <label>
          <input type="checkbox" name="newsletter" />
          {translations["forms_and_modal.auth.email_acceptance"]}
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" name="terms" required />
          {translations["forms_and_modal.auth.policy_acceptance"]}
        </label>
      </div>

      <button type="submit">{translations["forms_and_modal.auth.create_profile"]}</button>
    </form>
  );
};

export default SignInForm;