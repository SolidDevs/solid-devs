import { useTranslation } from "react-i18next";
import scss from "./ReusableContentCard.module.scss";
import React, { useMemo } from "react";
import Image from "next/image";

const ReusableContentCard = ({ title, icon, variant, statistic }) => {
  const { t } = useTranslation();
  const renderContent = useMemo(() => {
    if (variant == "process") {
      return <p>{statistic}</p>;
    } else {
      return <Image src={icon} alt="icon" width={27} height={19} />;
    }
  }, [variant]);
  return (
    <div className={scss.card}>
      <div className={scss.card__icon}>{renderContent}</div>
      <h3>{t(title)}</h3>
    </div>
  );
};

export default ReusableContentCard;
