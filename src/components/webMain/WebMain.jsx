import React, { useMemo } from "react";
import scss from "./WebMain.module.scss";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";

const WebMain = () => {
  const { t } = useTranslation();
  const renderText = useMemo(
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
          {renderText}
          <img src='./images/webMain/webMainImage.png' alt="website image" className={scss.content__image} />
        </div>
      </div>
    </div>
  );
};

export default WebMain;
