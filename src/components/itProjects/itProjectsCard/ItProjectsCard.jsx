import Image from "next/image";
import scss from "./ItProjectsCard.module.scss";
import React from "react";
import { useTranslation } from "react-i18next";

const ItProjectsCard = ({ icon, title }) => {
  const { t } = useTranslation();
  return (
    <div className={scss.projects}>
      <Image src={icon} alt="image" />
      <p>{t(title)}</p>
    </div>
  );
};

export default ItProjectsCard;