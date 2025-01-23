import React, { useEffect, useState, useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// Components
import { InputGroup } from "../common/InputGroup/InputGroup";
import { Button } from "../common/Button/Button";
import { VerificationCodeInput } from "../common/VerificationCodeInput/VerificationCodeInput";

const RegistrationForm: React.FC = () => {

    const [verificationCode, setVerificationCode] = useState<string | null>(null);
    const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);

    
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [timer, setTimer] = useState<number | null>(null);

  const initialValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    policyAgree: false,
    emailAgree: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a correct e-mail address")
      .max(254, "The e-mail is too long (max 254 characters)")
      .required("E-mail is required"),
    username: Yup.string()
    .matches(/^[a-zA-Z]/, "Username must start with a letter.")
      .min(3, "Username must be at least 3 characters")
      .max(35, "The username is too long (max 35 characters)")
      .required("Username is required "),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "The password is too long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
      dateOfBirth: Yup.date()
      .required("Date of Birth is required")
      .test(
        "is-valid-age",
        "Please state your true age",
        (value) => {
          if (!value) return false;
          const today = new Date();
          const birthDate = new Date(value);
          const age = today.getFullYear() - birthDate.getFullYear();
    
          const hasHadBirthdayThisYear =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() &&
              today.getDate() >= birthDate.getDate());
    
          const accurateAge = hasHadBirthdayThisYear ? age : age - 1;
    
          return accurateAge >= 8 && accurateAge <= 120;
        }
      ),
    policyAgree: Yup.boolean().oneOf(
      [true],
      "You must agree to the terms and conditions"
    ),
    emailAgree: Yup.boolean(),
  });

  const handleSendVerificationCode = async (
    email: string,
    errors: any
  ): Promise<void> => {
    
    if (errors || !email) {
      return;
    }

    const generateVerificationCode = async (): Promise<string> => {
      return Math.random().toString().slice(2, 8);
    };

    const sendVerificationCode = async (email: string, verificationCode: string): Promise<boolean> => {
      try {
        const response = await fetch(
          "http://localhost:5000/test-email/send-verification-code",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, code: verificationCode }),
          }
        );
        

        if (!response.ok) {
          console.log("Failed to send verification code");
          return false;
        }

        return true;
      } catch (error) {
        console.log("Error:", error);
        return false;
      }
    };

    setIsButtonDisabled(true);
    
    setTimer(30);

    const generatedVerificationCode = await generateVerificationCode();
    const isEmailSended = await sendVerificationCode(email, generatedVerificationCode);

    if (!isEmailSended) {
      setIsButtonDisabled(false);
      setTimer(null);
      setEmailErrorMessage("Something went wrong. Please try again.");
      return;
    }

    setVerificationCode(generatedVerificationCode);

    let remainingTime = 30;
    setTimer(remainingTime);

    const countdown = setInterval(() => {
      remainingTime -= 1;
      setTimer(remainingTime);
      if (remainingTime <= 0) {
        clearInterval(countdown);
        setIsButtonDisabled(false);
      }
    }, 1000);
  };

  const onVerificationCodeInputComplete = (code: string): void => {
    if (verificationCode === code) {
      setIsEmailVerified(true);
      setEmailErrorMessage("");
      setTimer(null);
      console.log("Verification successful!");
    } else {
      setIsEmailVerified(false);
      setEmailErrorMessage("Invalid verification code. Please try again.");
      console.log("Verification failed. Code does not match.");
    }
  }






  const handleSubmit = (values: typeof initialValues) => {
    console.log("Submitted values:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, errors }) => (
        <Form className="registration-form">
          <div className="registration-form__email-block">
            <div className="registration-form__email-block__up-line">
              {/* Email */}
              <InputGroup
                label="Email"
                name="email"
                type="email"
                placeholder="example@mail.com"
                customError={emailErrorMessage}
                isDisabled={isEmailVerified}
                additionalClass={
                  isEmailVerified ? "input-group--email-verified" : ""
                }
              />
              <Button
                additionalClass={`registration-form__email-block__up-line__btn ${
                  errors.email || !values.email || isButtonDisabled
                    ? "registration-form__email-block__up-line__btn--disabled"
                    : ""
                } ${isEmailVerified ? "registration-form__email-block__up-line__btn--email-verified" : ""}
                `}
                content={
                  isEmailVerified
                    ? "Email Verified"
                    : isButtonDisabled
                    ? `Resend in ${timer}s`
                    : "Send Code"
                }
                clickFunction={() =>
                  handleSendVerificationCode(values.email, errors.email)
                }
                type="button"
                disabled={
                  isButtonDisabled ||
                  Boolean(errors.email) ||
                  !Boolean(values.email) ||
                  isEmailVerified
                }
              />
            </div>
            <VerificationCodeInput
              additionalClass={`registration-form__email-block__code ${isEmailVerified ? "registration-form__email-block__code--email-verified" : ""}`}
              length={6}
              onComplete={(code: string) =>
                onVerificationCodeInputComplete(code)
              }
              isDisabled={isEmailVerified}
            />
          </div>

          {/* Username */}
          <InputGroup
            label="Username"
            name="username"
            type="text"
            placeholder="user_name.38"
          />

          {/* Date of Birth */}
          <InputGroup label="Date of Birth" name="dateOfBirth" type="date" />

          <div className="registration-form__password-block">
            {/* Password */}
            <InputGroup label="Password" name="password" type="password" />
            <InputGroup
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
          </div>

          {/* Policy Agree */}
          <InputGroup
            type="checkbox"
            name="policyAgree"
            label="Agree to terms and conditions"
          />

          {/* Email Agree */}
          <InputGroup
            type="checkbox"
            name="emailAgree"
            label="Receive email updates"
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
