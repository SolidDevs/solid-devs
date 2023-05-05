import React, { useMemo } from "react";
import scss from "./WebMain.module.scss";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import Image from "next/image";

const WebMain = () => {
  const { t } = useTranslation();

  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #666',
  };

  const renderContent = useMemo(
    () => (
      <div className={scss.content__text__wrapper}>
        <div className={scss.content__title} >
          <p>{t("webMain.title")}</p>
        </div>
        <div className={scss.content__description}>
          <p>{t("webMain.description")}</p>
        </div>
        <Button title={t("button_rauseble.project")} withArrow={true} variant='btn__light_blue' />
      </div>
    ),
    []
  );
  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.main__content}>
          {renderContent}
          <img
            src='/images/webMain/webMainImage.png'
            alt="website image"
            className={scss.content__image}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default WebMain;
