import { useTranslation } from "react-i18next";
import scss from "./ReasonsCard.module.scss";
import React, { useMemo } from "react";
import Image from "next/image";
import icon from "../../../../public/images/webServices/serviceIcon.png"

const ReasonsCard = ({ title, description}) => {
  const { t } = useTranslation();
  return (
    <div className={scss.reasons__card}>
      <div className={scss.reasons__card__icon}>
        <Image src={icon} alt="icon" width={27} height={16} />
      </div>
      <h3>{t(title)}</h3>
      <p>{t(description)}</p>
    </div>
  );
};

export default ReasonsCard;
