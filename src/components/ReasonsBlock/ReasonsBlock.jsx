import { reasons } from "@/constants/reasons";
import ReasonCard from "./ReasonCard/ReasonCard";
import scss from "./ReasonsBlock.module.scss";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

const ReasonsBlock = () => {
  const { t } = useTranslation();
  const reasonsRender = useMemo(
    () =>
      reasons.map((item, index) => (
        <ReasonCard key={`${item.title}_${index}`} {...item} />
      )),
    []
  );
  return (
    <div className={scss.mainReasonsBlock}>
      <div className="container">
        <h2>{t("reasons.title")}</h2>
        <div className={scss.cards}>{reasonsRender}</div>
      </div>
      <div className={scss.line}></div>
    </div>
  );
};

export default ReasonsBlock;
