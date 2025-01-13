import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import useTranslations from "../../hooks/useTranslations";
// Store & Slices
import { closeModal } from "../../store/slices/modalSlice";
// Components
import { Button } from "../common/Button/Button";
import { CollapsibleSection } from "../common/CollapsibleSection/CollapsibleSection";

interface FormValues {
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch();

  const { translations } = useTranslations([
    "forms_and_modal.auth.email",
    "forms_and_modal.auth.password",
    "forms_and_modal.auth.username",
    "forms_and_modal.auth.gender",
    "forms_and_modal.auth.date_of_birth",
    "forms_and_modal.auth.first_name",
    "forms_and_modal.auth.last_name",
    "forms_and_modal.auth.repeat_password",
    "forms_and_modal.auth.gender.male",
    "forms_and_modal.auth.gender.female",
    "forms_and_modal.auth.gender.another",
    "forms_and_modal.auth.gender.not_specified",
    "forms_and_modal.auth.policy_acceptance",
    "forms_and_modal.auth.email_acceptance",
    "forms_and_modal.auth.create_profile",
    "forms_and_modal.auth.send_code",
    "forms_and_modal.auth.home-country",
    "forms_and_modal.auth.home-city",
    "forms_and_modal.auth.like-travel-with",
  ]);

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);

    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
        email: formData.email,
        username: formData.username,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
      });

      // Очистка формы
      setFormData({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        gender: "male",
        dateOfBirth: "",
      });
    } catch (error: any) {}

    dispatch(closeModal());
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="registration-form__mandatory">
        {/* Email */}
        <div className="registration-form__mandatory__email-block registration-form__block">
          <div className="registration-form__mandatory__email-block__up-line">
            <div className="registration-form__input-group">
              <label htmlFor="email">
                {translations["forms_and_modal.auth.email"]}
              </label>
              <input type="email" id="email" name="email" required />
            </div>

            <Button
              additionalClass="registration-form__mandatory__email-block__up-line__btn"
              content={translations["forms_and_modal.auth.send_code"]}
              clickFunction={() => console.log("Send code func")}
              type="button"
            />
          </div>
          <div className="registration-form__error">Email Error</div>

          <div className="registration-form__mandatory__email-block__code">
            _ _ _ _ _ _
          </div>

          <div className="registration-form__mandatory__email-block__code-resend">
            You will be able to resend the code in 30 seconds
          </div>
        </div>

        {/* Username */}
        <div className="registration-form__block">
          <div className="registration-form__input-group">
            <label htmlFor="username">
              {translations["forms_and_modal.auth.username"]}
            </label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="registration-form__error">Username Error</div>
        </div>

        {/* Birth Date */}
        <div className="registration-form__block">
          <div className="registration-form__input-group">
            <label htmlFor="birthDate">
              {translations["forms_and_modal.auth.date_of_birth"]}
            </label>
            <input type="date" id="birthDate" name="birthDate" required />
          </div>
          <div className="registration-form__error">Birth Date Error</div>
        </div>

        {/* Password */}
        <div className="registration-form__block">
          <div className="registration-form__mandatory__password-block">
            <div className="registration-form__input-group">
              <label htmlFor="password">
                {translations["forms_and_modal.auth.password"]}
              </label>
              <input type="password" id="password" name="password" required />
            </div>

            <div className="registration-form__input-group">
              <label htmlFor="repeat-password">
                {translations["forms_and_modal.auth.repeat_password"]}
              </label>
              <input
                type="password"
                id="repeat-password"
                name="repeat-password"
                required
              />
            </div>
          </div>
          <div className="registration-form__error">Password Error</div>
        </div>
      </div>

      <CollapsibleSection
        additionalClass="registration-form__optional"
        title="Enter more data to make the application easier to use"
      >
        {/* Name */}
        <div className="registration-form__optional__name">
          <div className="registration-form__block">
            <div className="registration-form__input-group">
              <label htmlFor="firstName">
                {translations["forms_and_modal.auth.first_name"]}
              </label>
              <input type="text" id="first-name" name="first-name" />
            </div>
            <div className="registration-form__error">First name Error</div>
          </div>
          <div className="registration-form__block">
            <div className="registration-form__input-group">
              <label htmlFor="lastName">
                {translations["forms_and_modal.auth.last_name"]}
              </label>
              <input type="text" id="last-name" name="last-name" />
            </div>
            <div className="registration-form__error">Last name Error</div>
          </div>
        </div>

        {/* Gender */}
        <div className="registration-form__block">
          <div className="registration-form__input-group">
            <label htmlFor="gender">
              {translations["forms_and_modal.auth.gender"]}
            </label>
            <select
              id="gender"
              name="gender"
              onChange={(e) => {}}
              className="registration-form__gender"
            >
              <option value="not_specified">Prefer not to say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Home */}
        <div className="registration-form__optional__home">
          <div className="registration-form__block">
            <div className="registration-form__input-group">
              <label htmlFor="home-country">
                {translations["forms_and_modal.auth.home-country"]}
              </label>
              <input type="text" id="home-country" name="home-country" />
            </div>
          </div>
          <div className="registration-form__block">
            <div className="registration-form__input-group">
              <label htmlFor="home-city">
                {translations["forms_and_modal.auth.home-city"]}
              </label>
              <input type="text" id="home-city" name="home-city" />
            </div>
            <div className="registration-form__error">City Error</div>
          </div>
        </div>

        {/* Travel Group */}
        <div className="registration-form__block">
          <div className="registration-form__input-group">
            <label htmlFor="travel-group">
              {translations["forms_and_modal.auth.like-travel-with"]}
            </label>
            <select
              id="travel-group"
              name="travel-group"
              onChange={(e) => {}}
              className="registration-form__travel-group"
            >
              <option value="on-my-own">On my own</option>
              <option value="couple">As a couple</option>
              <option value="family">As a family</option>
              <option value="large-group">A large group of people</option>
            </select>
          </div>
        </div>

        {/* Добавить любимый тип транспорта */}
        {/* Добавить любимый тип отдыха - море, города и архитектура, паталки и т.д. */}
      </CollapsibleSection>

      {/* Emails Agree */}
      <div className="registration-form__block">
        <div className="registration-form__input-group">
          <label>
            <input type="checkbox" name="emails-agree" />
            {translations["forms_and_modal.auth.email_acceptance"]}
          </label>
        </div>
      </div>

      {/* Policy Agree */}
      <div className="registration-form__block">
        <div className="registration-form__input-group">
          <label>
            <input type="checkbox" name="policy-agree" required />
            {translations["forms_and_modal.auth.policy_acceptance"]}
          </label>
        </div>
      </div>

      <Button
        additionalClass="registration-form__submit"
        content={translations["forms_and_modal.auth.create_profile"]}
        clickFunction={() => console.log("create")}
        type="submit"
      />
    </form>
  );
};

export default RegistrationForm;
