import React from "react";
import scss from "./Navigation.module.scss";
import { useTranslation } from "react-i18next";

const Navigation = ({ title }) => {
  const { t } = useTranslation();
  let className = scss.title;
  return (
    <div className={scss.wrapper}>
      <h4 className={className}>
        <p className={scss.wrapper__title}>{t("navigation.title")}</p>
        {t(title)}
      </h4>
    </div>
  );
};
export default Navigation;
