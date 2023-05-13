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
    const title = data.map((title) => title.desc)
    return <h2>{t(title)}</h2>
  }, [data, t]);
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
