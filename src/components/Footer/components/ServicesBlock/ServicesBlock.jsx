import { useTranslation } from "react-i18next";
import React from "react";

const ServicesBlock = ({ title, items }) => {
  const { t } = useTranslation();
  return (
    <div>
      <h3>{t(title)}</h3>
      {items.map((el, index) => (
        <p key={`${el.subTitle}_${index}`}>{t(el.subTitle)}</p>
      ))}
    </div>
  );
};

export default ServicesBlock;
