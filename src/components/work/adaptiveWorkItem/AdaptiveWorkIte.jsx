import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import scss from "./adaptiveWorkItem.module.scss";
import Image from "next/image";
import arrow from "../../../../public/assets/images/ourProject/arrow.svg";

const AdaptiveWorkItem = ({ title, description, countOfItem, handleClick, activeItem }) => {
  const { t } = useTranslation();

  const isActive = countOfItem === activeItem;

  return (
    <div className={`${scss.wrapper__item} ${isActive && scss.active}`} onClick={() => handleClick(countOfItem)}>
      <div className={scss.item_title}>
        <h1>{countOfItem + 1}.&nbsp;{t(title)}</h1>
        <Image width={20} height={12} src={arrow} alt="arrow" className={isActive ? scss.rotate : ""} />
      </div>
      {isActive && (
        <div className={scss.item_open}>
          <p>{t(description)}</p>
        </div>
      )}
    </div>
  );
};

export default memo(AdaptiveWorkItem);
