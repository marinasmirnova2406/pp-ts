import React from "react";
import useTranslations from "../../../hooks/useTranslations";
// Components
import { Modal } from "./Modal";
// Forms
import RegionSettingsForm from "../../forms/RegionSettingsForm";
// Locate
// import { FormattedMessage } from 'react-intl'

const RegionSettingsModal = () => {
  const { translations } = useTranslations([
    "region_settings.region_settings",
  ]);

  return (
    <Modal
      styleType=""
      title={translations["region_settings.region_settings"]}
      content={<RegionSettingsForm />}
    />
  );
};

export { RegionSettingsModal };
