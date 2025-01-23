import React from "react";
import { Button } from "./Button";

interface ResetButtonProps {
  additionalClass?: string;
  clickFunction: () => void;
  isDisabled?: boolean;
}

const ResetButton: React.FC<ResetButtonProps> = ({
  additionalClass = "",
  clickFunction,
  isDisabled = false,
}) => {
  return (
    <Button
      additionalClass={`button__reset ${additionalClass}`}
      clickFunction={clickFunction}
      content="R"
      disabled={isDisabled}
    />
  );
};

export { ResetButton };
