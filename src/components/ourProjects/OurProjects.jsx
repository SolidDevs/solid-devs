import React, { useMemo, useState } from "react";
import scss from "./OurProjects.module.scss";
import { ourProjectArr } from "@/constants/ourProjects";
import Slider from "react-slick";
import SampleNextArrow from "./arrows/nextArrow/SampleNextArrow";
import SamplePrevArrow from "./arrows/prevArrow/SamplePrevArrow";
import Paging from "./paging/Paging";
import arrow from "../../../public/assets/images/ourProject/arrow.svg";
import ProjectsItem from "./projectsItem/ProjectsItem";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import Image from "next/image";

const OurProjects = () => {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isActive, setActive] = useState(false);
  const [links, setLinks] = useState([]);
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
      ourProjectArr.map((el, index) => {
        setLinks(el.links);
        return <ProjectsItem {...el} key={`${el.title}_${index}`} />;
      }),
    []
  );

  const linksItem = useMemo(
    () =>
      links.map((link, i) => (
        <>
          <div
            key={`${link}_${i}`}
            className={scss.links__item}
            id="ourProject"
          >
            <Image src={arrow} width={8} height={14} />
            <p>{t(link)}</p>
          </div>
        </>
      )),
    [links]
  );

  return (
    <div className={scss.ourProjects} id="ourProject">
      <h1 id="ourProject">{t("ourProjects.ourProjectsTitle")}</h1>
      <div className={scss.projects + " projects"}>
        <div className={scss.item__info} id="ourProject">
          <div className={scss.item__title}>
            <h1>{t("ourProjects.title")}</h1>
          </div>
          <div className={scss.item__subtitle}>
            <p>{t("ourProjects.subtitle")}</p>
          </div>
          <div className={scss.item__links}>{linksItem}</div>
          <Button
            title={"button__reusable.site"}
            variant={"btn__no_bg"}
            withArrow={true}
          />
        </div>
        <Slider {...sliderSettings}>{renderProjects}</Slider>
        <div className={scss.item__info_adaptive} id="ourProject">
          <div
            onClick={() => setActive(!isActive)}
            className={scss.wrapper__title}
          >
            <div className={scss.wrapper__title_left}>
              <div className={scss.item__title}>
                <h1>{t("ourProjects.title")}</h1>
              </div>
              <div className={scss.item__subtitle}>
                <p>{t("ourProjects.subtitle")}</p>
              </div>
            </div>
            <div
              className={
                isActive
                  ? scss.wrapper__title_right_active
                  : scss.wrapper__title_right
              }
            >
              <Image width={8} height={14} src={arrow} />
            </div>
          </div>
          {isActive ? (
            <div className={scss.item__link_show}>
              <div className={scss.item__links}>
                {links.map((link, i) => (
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
          ) : (
            <div className={scss.item__links_hide}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
