import { webServicesData } from "@/constants/services";
import { proccessData } from "@/constants/process";
import scss from "./ServicesAndProcess.module.scss"
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ReusableCard from "./card/ReusableCard";

const ServicesAndProcess = ({ variant }) => {
  const { t } = useTranslation();
  let data = variant == "process" ? proccessData : webServicesData

  const reasonsRender = useMemo(
    () =>
      data.map((item, index) => (
        <ReusableCard
          key={`${item.title}_${index}`}
          {...item}
          variant={variant}
          numeration={index + 1}
        />
      )),
    [data, variant]
  );

  const renderLine = useMemo(() => {
    if (variant == "process") {
      return (
        <div className={scss.main__line}></div>
      )
    }
  }, [variant])

  const renderTitle = useMemo(() => {
    if (variant == "process") {
      return (
        <h2>{t("webMain.processTitle")}</h2>
      )
    } else {
      return (
        <h2>{t("webMain.serviceTitle")}</h2>
      )
    }
  }, [variant])
  return (
    <div className={variant == "process" ? scss.processMain : scss.serviceMain}>
      <div className="container">
        {renderTitle}
        <div className={scss.main__cards}>{reasonsRender}</div>
      </div>
      {renderLine}
    </div>
  );
};

export default ServicesAndProcess;