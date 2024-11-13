import React from "react";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
//Slices
import { closeModal } from "../../../store/slices/modalSlice";

const DeleteButton: React.FC = () => {
  const dispatch = useDispatch();

  const closeModalFunction = () => {
    dispatch(closeModal());
  };

  return (
    <Button
      additionalClass="button__delete"
      clickFunction={closeModalFunction}
      text="X"
    />
  );
};

export { DeleteButton };
