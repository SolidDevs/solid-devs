import React, { useEffect, useMemo, useState } from "react";
import scss from "./FeedBack.module.scss";
import Card from "./card/Card";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SampleNextArrow from "./arrows/nextArrow/SampleNextArrow";
import SamplePrevArrow from "./arrows/prevArrow/SamplePrevArrow";
import Paging from "./paging/Paging";
import SectionContainer from "../layoutComponent/SectionContainer";
import useFeedback from "@/hooks/useFeedback";
import Preloader from "../Preloader/Preloader";

const FeedBack = ({ isMain }) => {

  const [activeSlide, setActiveSlide] = useState(0);
  const { feedbacks, getFeedbacks, isLoading } = useFeedback()

  useEffect(() => {
    getFeedbacks();
  }, [])

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  let currentShow = 3;

  if (isMain) {
    currentShow = 2;
  }

  const sliderSettings = {
    infinite: false,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: currentShow,
    slidesToScroll: currentShow,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          dotsClass: `slick-dots ${scss.customDots}`,
          customPaging: (i) => <Paging isActive={i === activeSlide} />,
          beforeChange: (_, newIndex) => handleSlideChange(newIndex),
        },
      },
    ],
  };
  const { t } = useTranslation();
  const renderCard = useMemo(
    () =>
      feedbacks?.map((el, index) => (
        <Card {...el} key={`${el.title}_${index}`} />
      )),
    [feedbacks]
  );
  if (isLoading) return <Preloader />
  return (
    <div className={scss.feedBack} id="feedback" >
      <SectionContainer id="feedback" title={t("feedBack.heading")}>
        <div className={scss.feedBack__slide}>
          <Slider {...sliderSettings}>{renderCard}</Slider>
        </div>
      </SectionContainer>
    </div>
  );
};

export default FeedBack;
