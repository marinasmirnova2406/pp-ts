import React, { ReactNode } from "react";

interface ButtonProps {
    additionalClass?: string;
    content: ReactNode;
    clickFunction: () => void;
    type?: "button" | "submit" | "reset";
  }
  const Button: React.FC<ButtonProps> = ({
    additionalClass = "",
    content,
    clickFunction,
    type = "button",
  }) => {
    return (
      <button
        className={`button ${additionalClass}`}
        onClick={clickFunction}
        type={type}
      >
        {content}
      </button>
    );
  };
  
  export { Button };