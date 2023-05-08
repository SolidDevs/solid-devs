import { useTranslation } from "react-i18next";
import scss from "./ReasonsCard.module.scss";
import React from "react";

const ReasonsCard = ({ title, description }) => {
  const { t } = useTranslation();
  return (
    <div className={scss.reasons__card}>
      <h3>{t(title)}</h3>
      <p>{t(description)}</p>
    </div>
  );
};

export default ReasonsCard;