import { useTranslation } from "react-i18next";
import scss from "./ReasonCard.module.scss";
import React from "react";

const ReasonCard = ({ title, desc }) => {
  const { t } = useTranslation();
  return (
    <div className={scss.mainCard}>
      <h3>{t(title)}</h3>
      <p>{t(desc)}</p>
    </div>
  );
};

export default ReasonCard;
