import React, { useMemo } from "react";
import scss from "./feedBack.module.scss";
import FeedBackCard from "./feed__back_card/feedBackCard";
import { useTranslation } from "react-i18next";
import { feedBackArr } from "@/constants/feedBack";
const FeedBack = () => {
  const { t } = useTranslation();
  const renderCard = useMemo(
    () => feedBackArr.map((el) => <FeedBackCard {...el} key={el.title} />),
    [feedBackArr]
  );
  return (
    <div className={scss.talk}>
      <h1>{t("feedBack.call")}</h1>
      <div className={scss.talk__slide}>{renderCard}</div>
    </div>
  );
};

export default FeedBack;
