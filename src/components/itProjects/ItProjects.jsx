import scss from "./ItProjects.module.scss";
import React from "react";
import ItProjectsCard from "../itProjects/itProjectsCard/ItProjectsCard";
import { itProjects } from "@/constants/itProjects";
import SectionContainer from "../layoutComponent/SectionContainer";
import { useTranslation } from "react-i18next";

const ItProjects = () => {
  const { t } = useTranslation();
  return (
    <SectionContainer title={t("sectionContainer.project__title")}>
      <div className={scss.cards__main}>
        {itProjects.map((item) => (
          <ItProjectsCard key={item.id} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ItProjects;