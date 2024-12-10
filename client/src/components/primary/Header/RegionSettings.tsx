import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Store & Slices
import { RootState } from "../../../store/index";
import { openModal } from "../../../store/slices/modalSlice";
// Components
import { Button } from "../../common/Button/Button";
import { RegionSettingsModal } from "../../common/Modal/RegionSettingsModal";

const RegionSettings: React.FC = () => {
  const dispatch = useDispatch();
  const openModalType = useSelector(
    (state: RootState) => state.modal.openModal
  );

  return (
    <div className="region-settings">
      <Button
        additionalClass="region-settings__btn"
        content={<img alt="Settings Icon" src="img/settings-icon.svg" />}
        clickFunction={() => dispatch(openModal("RegionSettings"))}
        type="button"
      />
      {openModalType === "RegionSettings" ? <RegionSettingsModal /> : null}
    </div>
  );
};

export { RegionSettings };
