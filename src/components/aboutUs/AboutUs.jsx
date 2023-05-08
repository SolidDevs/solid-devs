import { useTranslation } from "react-i18next";
import scss from "./AboutUs.module.scss";
import React, { useMemo } from "react";
import { aboutUs } from "@/constants/aboutUs";
import AboutCard from "./aboutCard/AboutCard";

const AboutUs = () => {
  const { t } = useTranslation();
  const aboutRender = useMemo(
    () =>
      aboutUs.map((item, index) => (
        <AboutCard key={`${item.title}_${index}`} {...item} />
      )),
    []
  );
  return (
    <>
      <div className="container">
        <div className={scss.about_us__description}>
          <div className={scss.left__content}>
            <h2>{t("aboutUs.aboutUs__main_title")}</h2>
            <p>{t("aboutUs.firstStepDesc")}</p>
            <p>{t("aboutUs.secondStepDesc")}</p>
            <p>{t("aboutUs.thirdStepDesc")}</p>
          </div>
          <div className={scss.right__content}>{aboutRender}</div>
        </div>
      </div>
      <div className={scss.about__line}></div>
    </>
  );
};

export default AboutUs;
