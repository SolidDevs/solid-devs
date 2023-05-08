import { useTranslation } from "react-i18next";
import scss from "./AboutCard.module.scss";
import React from "react";

const AboutCard = ({ title, description }) => {
  const { t } = useTranslation();
  return (
    <div className={scss.card__main}>
      <div>
        <h3>
          {t(title)} <div className={scss.cub}></div>
        </h3>
        <p>{t(description)}</p>
      </div>
    </div>
  );
};
export default AboutCard;
