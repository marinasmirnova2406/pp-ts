import React, { ReactNode } from "react";

interface ButtonProps {
    additionalClass?: string;
    content: ReactNode;
    clickFunction: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  }
  const Button: React.FC<ButtonProps> = ({
    additionalClass = "",
    content,
    clickFunction,
    type = "button",
    disabled = false
  }) => {
    return (
      <button
        className={`button ${additionalClass}`}
        onClick={clickFunction}
        type={type}
        disabled={disabled}
      >
        {content}
      </button>
    );
  };
  
  export { Button };