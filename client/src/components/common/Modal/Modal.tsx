import React, { ReactNode } from "react";
//Slices
import { closeModal } from "../../../store/slices/modalSlice";
// Components
import { DeleteButton } from "../Button/DeleteButton";

interface ModalProps {
    styleType: string;
    title: string;
    content: string;
    buttons?: ReactNode;
  }

  const Modal: React.FC<ModalProps> = ({ styleType, title, content, buttons = null }) => {

  
    return (
      <div className={`modal modal--${styleType}`}>
        <div className="modal__head">
          <h2>{title}</h2>
          <DeleteButton />
        </div>
        <div className="modal__content">{content}</div>
        <div className="modal__buttons">{buttons}</div>
      </div>
    );
  };
  
  export { Modal };
