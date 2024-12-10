import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Store & Slices
import { RootState } from "../../../store/index";
import { openModal } from "../../../store/slices/modalSlice";
// Components
import { Avatar } from "../../common/Avatar/Avatar";
import { UserBurgerMenu } from "./UserBurgerMenu"

const UserPanel: React.FC = () => {
  const dispatch = useDispatch();

  
  return (
    <div className="user-panel">
      <Avatar additionalClass="user-panel__avatar" imgUrl="duck.jpg" />
      Hi, User
      <UserBurgerMenu />
    </div>
  );
};

export { UserPanel };
