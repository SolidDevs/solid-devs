import { reasonsList } from "@/constants/reasons";
import scss from "./ReasonsBlock.module.scss";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ReasonsCard from "./reasonsCard/ReasonsCard";

const ReasonsBlock = () => {
  const { t } = useTranslation();
  const reasonsRender = useMemo(
    () =>
      reasonsList.map((item, index) => (
        <ReasonsCard key={`${item.title}_${index}`} {...item} />
      )),
    []
  );
  return (
    <div className={scss.main__reasons}>
      <div className="container">
        <h2>{t("reasons.heading")}</h2>
        <div className={scss.reasons__cards}>{reasonsRender}</div>
      </div>
      <div className={scss.reasons__line}></div>
    </div>
  );
};

export default ReasonsBlock;
