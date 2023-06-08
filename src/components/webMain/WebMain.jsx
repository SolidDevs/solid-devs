import React, { useMemo } from "react";
import scss from "./WebMain.module.scss";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";

const WebMain = ({ data }) => {
  const { t } = useTranslation();

  const renderContent = useMemo(
    () => (
      <div className={scss.content__text__wrapper}>
        <div className={scss.content__title}>
          <p>{t(data.title)}</p>
        </div>
        <div className={scss.content__description}>
          <p>{t(data.description)}</p>
        </div>
        <Button
          title={t("button__reusable.project")}
          withArrow={true}
          variant="btn__light_blue"
        />
      </div>
    ),
    [t, data]
  );

  return (
    <>
      <div className={scss.main}>
        <div className="container">
          <div className={scss.main__content}>
            {renderContent}
            <Image
              src={data.image}
              alt="website image"
              className={scss.content__image_nonAdaptive}
              width={631}
              height={563}
            />
            <Image
              src={data.adaptiveImage}
              alt="website image"
              className={scss.content__image_adaptive}
              width={631}
              height={563}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebMain;
