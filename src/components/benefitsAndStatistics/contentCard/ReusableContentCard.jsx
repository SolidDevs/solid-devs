import { useTranslation } from "react-i18next";
import scss from "./ReusableContentCard.module.scss";
import React, { useMemo } from "react";
import Image from "next/image";

const ReusableContentCard = ({ title, icon, variant, accounting }) => {
  const { t } = useTranslation();
  const renderContent = useMemo(() => {
    if (variant == "statistic") {
      return <p>{accounting}</p>;
    } else {
      return <Image src={icon} alt="icon" width={27} height={19} />;
    }
  }, [variant]);
  return (
    <div className={scss.cards}>
      <div className={scss.cards__pictogram}>{renderContent}</div>
      <h3>{t(title)}</h3>
    </div>
  );
};

export default ReusableContentCard;
