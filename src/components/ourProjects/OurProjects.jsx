import React, { useMemo, useState } from "react";
import scss from "./OurProjects.module.scss";
import { ourProjectArr } from "@/constants/ourProjects";
import Slider from "react-slick";
import SampleNextArrow from "./arrows/nextArrow/SampleNextArrow";
import SamplePrevArrow from "./arrows/prevArrow/SamplePrevArrow";
import Paging from "./paging/Paging";
import ProjectsItem from "./projectsItem/ProjectsItem";
import { useTranslation } from "react-i18next";

const OurProjects = () => {

  const { t } = useTranslation();

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const sliderSettings = {
    infinite: false,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          nextArrow: false,
          prevArrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          nextArrow: false,
          prevArrow: false,
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
          arrows: false,
          dotsClass: `slick-dots ${scss.customDots}`,
          customPaging: (i) => <Paging isActive={i === activeSlide} />,
          beforeChange: (_, newIndex) => handleSlideChange(newIndex),
        },
      },
    ],
  };

  const renderProjects = useMemo(
    () =>
      ourProjectArr.map((el, index) => (
        <ProjectsItem {...el} key={`${el.title}_${index}`} />
      )),
    []
  );

  return (
    <div className={scss.ourProjects}>
      <h1>{t("ourProjects.ourProjectsTitle")}</h1>
      <div className={scss.projects}>
        <Slider {...sliderSettings}>{renderProjects}</Slider>
      </div>
    </div>
  );
};

export default OurProjects;
