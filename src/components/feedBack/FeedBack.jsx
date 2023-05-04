import React, { useMemo } from "react";
import scss from "./FeedBack.module.scss";
import { feedBackArr } from "@/constants/feedBack";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card/Card";
const FeedBack = ({ sliderSettings }) => {
  const { t } = useTranslation();
  const renderCard = useMemo(
    () =>
      feedBackArr.map((el, index) => (
        <Card {...el} key={`${el.title}_${index}`} />
      )),
    []
  );
  return (
    <div className={scss.talk}>
      <h1>{t("feedBack.call")}</h1>
      <div className={scss.talk__slide}>
        <Slider {...sliderSettings}>{renderCard}</Slider>
      </div>
    </div>
  );
};

export default FeedBack;
