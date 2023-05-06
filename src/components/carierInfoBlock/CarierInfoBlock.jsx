import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import scss from "./CarierInfoBlock.module.scss"
import { useMemo } from "react";
import { teamStepsList, practicumStepsList } from "@/constants/carier";

const CarierInfoBlock = ({ variant }) => {
  const { t } = useTranslation();
  const title = variant == "practicum" ? t("carier.practicumtitle") : t("carier.teamTitle")
  const description = variant == "practicum" ? t("carier.practicumDescription") : t("carier.teamDescription")
  const data = variant == "practicum" ? practicumStepsList : teamStepsList

  const showLine = useMemo(() => {
    if (variant == "team") {
      return (
        <div className={scss.carier__line}></div>
      )
    }
  }, [variant])

  const renderCards = useMemo(() => (
    data.map((el, index) => (
      <div className={scss.step} key={`${el.title}_${el.description}`}>
        <div className={scss.step__numeration}>{index + 1}</div>
        <div className={scss.step__text__container}>
          <div className={scss.text__title}>{t(el.title)}</div>
          <div className={scss.text__description}>{t(el.description)}</div>
        </div>
      </div>
    ))
  ), [data, t])

  const showText = useMemo(() => {
    if (variant == "team") {
      return (
        <p className={scss.content__letter__text}>{t("carier.writeLetter")}</p>
      )
    }
  }, [variant, t]
  )

  return (
    <div className={scss.carier__wrapper}>
      <div className={scss.text__content}>
        <p className={scss.content__title}>{title}</p>
        <p className={scss.content__description}>{description}</p>
        {showText}
        <Button variant="btn__light_blue" withArrow={true} title={t("carier.btnText")} />
      </div>
      <div className={scss.steps__container}>
        {renderCards}
      </div>
      {showLine}
    </div>
  )
};

export default CarierInfoBlock;
