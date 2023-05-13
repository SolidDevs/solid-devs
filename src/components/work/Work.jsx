import { workLinks } from "@/constants/navbar";
import SectionContainer from "../layoutComponent/SectionContainer";
import WorkNavbar from "../navbar/WorkNavbar";
import scss from "./Work.module.scss";
import { useTranslation } from "react-i18next";
import { useMemo, useState, useRef } from "react";
import { workSliderData } from "@/constants/work";
import Slider from "react-slick";
import SampleNextArrow from "./work__item_arrows/work__arrow_next";
import SamplePrevArrow from "./work__item_arrows/work__arrow_prev";

const Work = () => {
  const { t } = useTranslation("");

  const sliderRef = useRef(null);

  const [state, setState] = useState(0)

  const showElement = (index) => {
    sliderRef?.current?.slickGoTo(index);
  };

  showElement(state);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow setState={setState} title={workLinks[state + 1]} arr={workLinks} counter={state} />,
    prevArrow: <SamplePrevArrow setState={setState} title={workLinks[state - 1]} arr={workLinks} counter={state} />,
  };

  const sliderCards = useMemo(
    () =>
      workSliderData.map((item, index) => (
        <div key={`${item.title}_${index}`} className={scss.work__item}>
          <h1 className={scss.work__item__counter}>{`0${index + 1}`}</h1>
          <div className={scss.work__item_info}>
            <p className={scss.title}>{t(item.title)}</p>
            <p className={scss.description}>{t(item.description)}</p>
          </div>
        </div>
      )),
    [workSliderData]
  );

  return (
    <SectionContainer title={t("work.title")}>
      <WorkNavbar setState={setState} state={state} navbarLinks={workLinks} paramName={"work"} />
      <div className={`${scss.wrapper} work__wrapper`}>
        <Slider ref={sliderRef} {...settings}>{sliderCards}</Slider>
      </div>
    </SectionContainer>
  );
};

export default Work;