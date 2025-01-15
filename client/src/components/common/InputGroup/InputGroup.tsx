import React from "react";
import { useField } from "formik";

interface InputGroupProps {
  additionalClass?: string;
  label: string;
  type: string;
  name: string;
  id?: string;
  placeholder?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  additionalClass = "",
  label,
  type,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const isCheckbox = type === "checkbox";

  const inputClass = `
    input-group__input 
    ${meta.touched && meta.error ? "input-group__input--error" : ""}
    ${isCheckbox ? "input-group__input--checkbox" : ""}
  `;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let allowedRegex = null;

    switch (props.name) {
      case "email":
        allowedRegex = /^[a-zA-Z0-9@._-]*$/;
        break;

      case "username":
        if (value.length > 1) {
          value = value.toLowerCase();
        }
        allowedRegex = /^[a-zA-Z0-9._]*$/;
        break;

      default:
        allowedRegex = /.*/;
        break;
    }

    if (allowedRegex && allowedRegex.test(value)) {
      helpers.setValue(value);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(e.target.checked);
  };

  return (
    <div
      className={`input-group ${
        isCheckbox ? "input-group--checkbox" : ""
      } ${additionalClass}`}
    >
      {isCheckbox && (
        <>
          <input
            type="checkbox"
            className={inputClass}
            {...field}
            {...props}
            id={props.id || props.name}
            onChange={handleCheckboxChange} // Обработчик для чекбокса
          />
          <label
            htmlFor={props.id || props.name}
            className={`custom-checkbox ${
              meta.touched && meta.error ? "custom-checkbox--error" : ""
            }`}
          />
          <label
            htmlFor={props.id || props.name}
            className="input-group__label"
          >
            {label}
          </label>
        </>
      )}
      {!isCheckbox && (
        <>
          <label
            className="input-group__label"
            htmlFor={props.id || props.name}
          >
            {label}
          </label>
          <input
            type={type}
            className={inputClass}
            {...field}
            {...props}
            onChange={handleInput} // Добавляем обработчик для других инпутов
          />
          {meta.touched && meta.error && (
            <div className="input-group__error">{meta.error}</div>
          )}
        </>
      )}
    </div>
  );
};

export { InputGroup };
