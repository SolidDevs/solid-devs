import scss from "./ReusableContentCard.module.scss";
import React, { useMemo } from "react";
import Image from "next/image";
import icon from "../../../../public/images/webServices/check-mark.png"

const ReusableContentCard = ({ item, variant, accounting }) => {
  const renderContent = useMemo(() => {
    if (variant == "statistic") {
      return <p>{accounting}+</p>;
    } else {
      return <Image src={icon} alt="icon" width={23} height={16} />;
    }
  }, [variant]);
  return (
    <div className={scss.cards}>
      <div className={scss.cards__pictogram}>{renderContent}</div>
      <h3>{item}</h3>
    </div>
  );
};

export default ReusableContentCard;
