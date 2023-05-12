import scss from "./ServicesAndProcess.module.scss";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ReusableCard from "./card/ReusableCard";

const ServicesAndProcess = ({ variant, data }) => {
  const { t } = useTranslation();
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
  const renderTitle = useMemo(() => {
    if (variant == "process") {
      return <h2>{t(data.map((title) => title.desc))}</h2>;
    } else {
      return <h2>{t(data.map((title) => title.desc))}</h2>;
    }
  }, [variant]);
  return (
    <div className={variant == "process" ? scss.processMain : scss.serviceMain}>
      <div className="container">
        {renderTitle}
        <div className={scss.main__cards}>{reasonsRender}</div>
      </div>
    </div>
  );
};

export default ServicesAndProcess;
