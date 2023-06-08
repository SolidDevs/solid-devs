import { useTranslation } from "react-i18next";
import scss from "./AboutUs.module.scss";
import React, { useMemo } from "react";
import { aboutUs } from "@/constants/aboutUs";
import AboutCard from "./aboutCard/AboutCard";
import Navigation from "../Navigation/Navigation";

const AboutUs = () => {
  const { t } = useTranslation();
  const renderCards = useMemo(
    () =>
      aboutUs.map((item, index) => (
        <AboutCard key={`${item.title}_${index}`} {...item} />
      )),
    []
  );
  return (
    <>
      <Navigation title={t("navigation.aboutUs_description")} />
      <div className="container">
        <div className={scss.about__description}>
          <div className={scss.left__content}>
            <h2>{t("aboutUs.main__title")}</h2>
            <p>{t("aboutUs.firstStepDesc")}</p>
            <p>{t("aboutUs.secondStepDesc")}</p>
            <p>{t("aboutUs.thirdStepDesc")}</p>
          </div>
          <div className={scss.right__content}>{renderCards}</div>
        </div>
      </div>
      <div className={scss.about__line}></div>
    </>
  );
};

export default AboutUs;
