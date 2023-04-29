import React, { useMemo } from "react";
import scss from "./feedBack.module.scss";
import FeedBackCard from "./feed__back_card/feedBackCard";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
const FeedBack = ({ feedBackArr, title }) => {
  const { t } = useTranslation();
  const renderCard = useMemo(
    () => feedBackArr.map((el) => <FeedBackCard {...el} key={el.title} />),
    [feedBackArr]
  );
  return (
    <div className={scss.talk}>
      <h1>{t(title)}</h1>
      <div className={scss.talk__slide}>{renderCard}</div>
    </div>
  );
};

export default FeedBack;
