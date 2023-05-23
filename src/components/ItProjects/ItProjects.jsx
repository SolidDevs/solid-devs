import scss from "./ItProjects.module.scss";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ItProjectsCard from "./ItProjectsCard/ItProjectsCard";
import { itProjects } from "@/constants/itProjects";
import SectionContainer from "../layoutComponent/SectionContainer";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import arrow from "../../../public/assets/images/itProjects/arrow.svg";

const ItProjects = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const cardsMainRef = useRef(null);
  const itProjectsRender = useMemo(
    () =>
      itProjects.map((item, index) => (
        <ItProjectsCard key={`${item.title}_${index}`} {...item} />
      )),
    []
  );

  useEffect(() => {
    cardsMainRef.current.style.height = isOpen
      ? `${cardsMainRef.current.scrollHeight}px`
      : "0";
  }, [isOpen]);

  return (
    <div className={scss.projects} id="itProject">
      <div className={scss.projects__cards} id="itProject" >
        <SectionContainer title={t("sectionContainer.project__title")} id="itProject">
          <div className={scss.cards__main}>{itProjectsRender}</div>
        </SectionContainer>
      </div>
      <div className={scss.projects__adaptive} id="itProject">
        <div className={scss.title} onClick={() => setOpen(!isOpen)} id="itProject">
          <p>{t("sectionContainer.project__title")}</p>
          <div className={isOpen ? scss.title_right_active : scss.title_right}>
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
        <div
          className={`${scss.cards__wrapper} ${
            isOpen ? scss.show : ""
          }`}
          style={{
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
            transition: "opacity 0.5s ease-in-out",
          }}
          ref={cardsMainRef}
        >
          <div className={scss.cards__main} id="itProject">{itProjectsRender}</div>
        </div>
      </div>
    </div>
  );
};

export default ItProjects;
