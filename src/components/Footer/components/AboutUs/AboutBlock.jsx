import React from "react";
import { useTranslation } from "react-i18next";

const AboutBlock = ({ title, desc }) => {
  const { t } = useTranslation();
  return (
    <div>
      <h3>{t(title)}</h3>
      <p>{t(desc)}</p>
    </div>
  );
};

export default AboutBlock;
