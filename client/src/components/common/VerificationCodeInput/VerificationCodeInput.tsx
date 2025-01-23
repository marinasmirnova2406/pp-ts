import React, { useRef, useState } from "react";
// Components
import { ResetButton } from "../Button/ResetButton";

interface VerificationCodeInputProps {
  additionalClass?: string;
  length: number;
  onComplete: (code: string) => void;
  isDisabled?: boolean;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  additionalClass = "",
  isDisabled = false,
  length,
  onComplete,
}) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newValues = [...values];
    newValues[idx] = value.slice(-1);
    setValues(newValues);

    if (value && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }

    if (newValues.every((v) => v.length > 0)) {
      onComplete(newValues.join(""));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === "Backspace" && !values[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text");
    if (!/^\d+$/.test(pasteData)) return;

    const newValues = pasteData.slice(0, length).split("");
    const updatedValues = [...values];

    newValues.forEach((char, index) => {
      if (index < length) {
        updatedValues[index] = char;
      }
    });

    setValues(updatedValues);

    const nextFocusIdx = Math.min(newValues.length, length - 1);
    inputsRef.current[nextFocusIdx]?.focus();

    if (updatedValues.every((v) => v.length > 0)) {
      onComplete(updatedValues.join(""));
    }
  };

  const handleClear = () => {
    setValues(Array(length).fill(""));
    inputsRef.current[0]?.focus();
  };

  return (
    <div className={`verification-code-input ${additionalClass}`}>
      {values.map((value, idx) => (
        <input
          key={idx}
          type="text"
          value={value}
          maxLength={1}
          ref={(el) => (inputsRef.current[idx] = el)}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          onPaste={handlePaste}
          className="verification-code-input__one-number"
          disabled={isDisabled}
        />
      ))}
      <ResetButton
        clickFunction={() => handleClear()}
        isDisabled={isDisabled}
      />
    </div>
  );
};

export { VerificationCodeInput };
