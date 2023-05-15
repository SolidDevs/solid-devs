import scss from "./ItProjects.module.scss";
import React, { useMemo, useState } from "react";
import ItProjectsCard from "./ItProjectsCard/ItProjectsCard";
import { itProjects } from "@/constants/itProjects";
import SectionContainer from "../layoutComponent/SectionContainer";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import vector from "../../../public/assets/images/itProjects/vector.svg";
const ItProjects = () => {
  const { t } = useTranslation();
  const [isModal, setModal] = useState(false);
  const itProjectsRender = useMemo(
    () =>
      itProjects.map((item, index) => (
        <ItProjectsCard key={`${item.title}_${index}`} {...item} />
      )),
    []
  );
  return (
    <div className={scss.projects}>
      <div className={scss.projects__cards}>
        <SectionContainer title={t("sectionContainer.project__title")}>
          <div className={scss.cards__main}>{itProjectsRender}</div>
        </SectionContainer>
      </div>
      <div className={scss.projects__adaptive}>
        <div className={scss.title} onClick={() => setModal(!isModal)}>
          <p>{t("sectionContainer.project__title")}</p>
          <Image src={vector} width={14} height={8} alt="vector" />
        </div>
        {isModal && <div className={scss.cards__main}>{itProjectsRender}</div>}
      </div>
    </div>
  );
};

export default ItProjects;
