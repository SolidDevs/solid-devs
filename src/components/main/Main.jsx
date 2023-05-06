import React, { useMemo } from "react";
import scss from "./Main.module.scss";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import { mainSubtitles } from "@/constants/main";
const Main = () => {
  const { t } = useTranslation();
  const renderText = useMemo(
    () =>
      mainSubtitles.map((el, index) => (
        <div className={scss.main__subtitles} key={`${el.title}_${index}`}>
          <div className={scss.subtitles__title} >
            <p>{t(el.title)}</p>
          </div>
          <div className={scss.subtitles__subtitle}>
            <p>{t(el.subtitle)}</p>
          </div>
          <div className={scss.subtitles__description}>
            <p>{t(el.description)}</p>
          </div>
        </div>
      )),
    [t]
  );
  return (
    <div className={scss.main}>
      <div className="container">
        {renderText}
        <Button title={t("button_rauseble.project")} withArrow={true} />
      </div>
    </div>
  );
};

export default Main;
