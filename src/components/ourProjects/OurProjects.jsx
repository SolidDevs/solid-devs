import React, { useMemo } from "react";
import scss from "./OurProjects.module.scss";
import { useTranslation } from "react-i18next";
import { ourProjectArr } from "@/constants/ourProjects";
import Button from "../Button/Button";
import Image from "next/image";
import arrow from "../../../public/assets/images/ourProject/arrow.svg";
import Slider from "react-slick";
import SampleNextArrow from "./arrows/nextArrow/SampleNextArrow";
import SamplePrevArrow from "./arrows/prevArrow/SamplePrevArrow";
const OurProjects = () => {
  const { t } = useTranslation();
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
          nextArrow: false,
          prevArrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const renderProjects = useMemo(
    () =>
      ourProjectArr.map((el, index) => (
        <div className={scss.projects__item} key={`${el.title}_${index}`}>
          <div className={scss.item__info}>
            <div className={scss.item__title}>
              <h1>{t(el.title)}</h1>
            </div>
            <div className={scss.item__subtitle}>
              <p>{t(el.subtitle)}</p>
            </div>
            <div className={scss.item__links}>
              {el.links.map((link, i) => (
                <>
                  <div key={`${link}_${i}`} className={scss.links__item}>
                    <Image src={arrow} width={8} height={14} />
                    <p>{t(link)}</p>
                  </div>
                </>
              ))}
            </div>
            <Button
              title={"button__reusable.site"}
              variant={"btn__no_bg"}
              withArrow={true}
            />
          </div>
          <div className={scss.item__img}>
            <Image src={el.imgSLider} width={388} height={230} />
          </div>
        </div>
      )),
    []
  );
  return (
    <div className={scss.projects}>
      <Slider {...sliderSettings}>{renderProjects}</Slider>
    </div>
  );
};

export default OurProjects;
