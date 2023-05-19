import scss from "./ItProjects.module.scss";
import React, { useMemo, useState } from "react";
import ItProjectsCard from "./ItProjectsCard/ItProjectsCard";
import { itProjects } from "@/constants/itProjects";
import SectionContainer from "../layoutComponent/SectionContainer";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import arrow from "../../../public/assets/images/itProjects/arrow.svg";
const ItProjects = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const itProjectsRender = useMemo(
    () =>
      itProjects.map((item, index) => (
        <ItProjectsCard key={`${item.title}_${index}`} {...item} />
      )),
    []
  );
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
          <Image src={arrow} width={14} height={8} alt="arrow" />
        </div>
        <div className={`${scss.cards__main} ${isOpen ? scss.show : ""}`} id="itProject">
          {itProjectsRender}
        </div>
      </div>
    </div>
  );
};

export default ItProjects;
