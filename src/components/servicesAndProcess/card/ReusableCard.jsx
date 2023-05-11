import { useTranslation } from "react-i18next";
import scss from "./ReusableCard.module.scss";
import React, { useMemo } from "react";
import Image from "next/image";

const ReusableCard = ({ title, description, icon, variant, numeration }) => {
  const { t } = useTranslation();
  const renderContent = useMemo(() => {
    if (variant == "process") {
      return <p>{numeration}</p>;
    } else {
      return <Image src={icon} alt="icon" width={27} height={16} />;
    }
  }, [variant]);
  return (
    <div className={scss.card}>
      <div className={scss.card__icon}>{renderContent}</div>
      <h3>{t(title)}</h3>
      <p>{t(description)}</p>
    </div>
  );
};

export default ReusableCard;
