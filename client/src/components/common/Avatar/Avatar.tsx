import React from "react";

interface ButtonProps {
  additionalClass?: string;
  imgUrl: string;
  clickFunction?: () => void;
}

const Avatar: React.FC<ButtonProps> = ({
  additionalClass = "",
  imgUrl,
  clickFunction,
}) => {
  return (
    <div
      className={`avatar ${additionalClass}`}
      onClick={clickFunction ? clickFunction : undefined}
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    ></div>
  );
};

export { Avatar };
