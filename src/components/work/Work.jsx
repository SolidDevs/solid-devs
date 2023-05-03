import { workLinks } from "@/constants/navbar";
import SectionContainer from "../layoutComponent/SectionContainer";
import Navbar from "../navbar/Navbar";
import scss from "./Work.module.scss";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { workSliderData } from "@/constants/work";
import Slider from "react-slick";
import SampleNextArrow from "./work__item_arrows/work__arrow_next";
import SamplePrevArrow from "./work__item_arrows/work__arrow_prev";




const Work = () => {
  const { t } = useTranslation("");

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const sliderCards = useMemo(
    () =>
      workSliderData.map((item, index) => (
        <div key={`${item.title}_${index}`} className={scss.work__item}>
          <h1 className={scss.work__item_counter}>{item.count}</h1>
          <div className={scss.work__item_info}>
            <p className={scss.title}>{t(item.title)}</p>
            <p className={scss.work__item_description}>{t(item.description)}</p>
          </div>
        </div>
      )),
    [workSliderData]
  );
  return (
    <SectionContainer title={t("work.title")}>
      <Navbar navbarLinks={workLinks} paramName={"work"} />
      <div className={`${scss.wrapper} work__wrapper`}>
        <Slider {...settings}>{sliderCards}</Slider>
      </div>
    </SectionContainer>
  );
};

export default Work;
