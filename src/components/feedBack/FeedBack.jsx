import React, { useMemo } from "react";
import scss from "./FeedBack.module.scss";
import { feedBackArr } from "@/constants/feedBack";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FeedBackCard from "./feedBackCard/FeedBackCard";
const FeedBack = ({sliderSettings}) => {
  const { t } = useTranslation();
  const renderCard = useMemo(
    () => feedBackArr.map((el) => <FeedBackCard {...el} key={el.title} />),
    [feedBackArr]
  );
  return (
    <div className={scss.talk}>
      <h1>{t("feedBack.call")}</h1>
      <div className={scss.talk__slide}>
      <Slider {...sliderSettings}>
        {renderCard}
      </Slider>
      </div>
    </div>
  );
};

export default FeedBack;
