import React, { useMemo } from "react";
import scss from "./Main.module.scss";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import { mainSubtitles } from "@/constants/main";
const Main = () => {
  const { t } = useTranslation();
  const renderText = useMemo(
    () =>
      mainSubtitles.map((el) => (
        <div className={scss.main__subtitles} key={el.title}>
          <div className={scss.subtitles__title} key={el.title}>
            <p>{t(el.title)}</p>
          </div>
          <div className={scss.subtitles__subtitle} key={el.title}>
            <p>{t(el.subtitle)}</p>
          </div>
          <div className={scss.subtitles__description} key={el.title}>
            <p>{t(el.description)}</p>
          </div>
        </div>
      )),
    [mainSubtitles]
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