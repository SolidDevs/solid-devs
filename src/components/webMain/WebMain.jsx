import React, { useMemo } from "react";
import scss from "./WebMain.module.scss";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import Image from "next/image";

const WebMain = ({ title, description, image }) => {
  const { t } = useTranslation();

  const renderContent = useMemo(
    () => (
      <div className={scss.content__text__wrapper}>
        <div className={scss.content__title}>
          <p>{t(title)}</p>
        </div>
        <div className={scss.content__description}>
          <p>{t(description)}</p>
        </div>
        <Button
          title={t("button__reusable.project")}
          withArrow={true}
          variant="btn__light_blue"
        />
      </div>
    ),
    [t]
  );
  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.main__content}>
          {renderContent}
          <Image
            src={image}
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
