import React from "react";

interface ButtonProps {
    additionalClass?: string;
    text: string;
    clickFunction: () => void;
    type?: "button" | "submit" | "reset";
  }
  const Button: React.FC<ButtonProps> = ({
    additionalClass = "",
    text,
    clickFunction,
    type = "button",
  }) => {
    return (
      <button
        className={`button ${additionalClass}`}
        onClick={clickFunction}
        type={type}
      >
        {text}
      </button>
    );
  };
  
  export { Button };