import React, { useMemo, useState } from "react";
import scss from "./OurProjects.module.scss";
import { ourProjectArr } from "@/constants/ourProjects";
import Slider from "react-slick";
import SampleNextArrow from "./arrows/nextArrow/SampleNextArrow";
import SamplePrevArrow from "./arrows/prevArrow/SamplePrevArrow";
import Paging from "./paging/Paging";
import ProjectsItem from "./projectsItem/ProjectsItem";

const OurProjects = () => {

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
        <div className={scss.projects__item} key={`${el.title}_${index}`} id="project">
          <div className={scss.item__info}  id="project">
            <div className={scss.item__title } id="project">
              <h1>{t(el.title)}</h1>
            </div>
            <div className={scss.item__subtitle}  id="project">
              <p>{t(el.subtitle)}</p>
            </div>
            <div className={scss.item__links}  id="project">
              {el.links.map((link, i) => (
                <>
                  <div key={`${link}_${i}`} className={scss.links__item}  id="project">
                    <Image src={arrow} width={8} height={14} alt="arrow" />
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
          <div className={scss.item__img}  id="project">
            <Image src={el.imgSLider} width={388} height={230} alt="sliderImg" />
          </div>
        </div>
        <ProjectsItem {...el} key={`${el.title}_${index}`} />
      )),
    []
  );
  return (
    <div className={scss.projects} id="project">
      <Slider {...sliderSettings} id="project">{renderProjects}</Slider>
    </div>
  );
};

export default OurProjects;
