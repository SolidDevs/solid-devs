import scss from "./ItProjects.module.scss";
import React, { useMemo } from "react";
import ItProjectsCard from "./It__projects_card/ItProjectsCard";
import { itProjects } from "@/constants/itProjects";
import SectionContainer from "../layoutComponent/SectionContainer";
import { useTranslation } from "react-i18next";

const ItProjects = () => {
  const { t } = useTranslation();
  const itProjectsRender = useMemo(
    () =>
      itProjects.map((item, index) => (
        <ItProjectsCard key={`${item.title}_${index}`} {...item} />
      )),
    []
  );
  return (
    <SectionContainer title={t("sectionContainer.project__title")}>
      <div className={scss.cards__main}>{itProjectsRender}</div>
    </SectionContainer>
  );
};

export default ItProjects;
