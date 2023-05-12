import scss from "./BenefitsAndStatistics.module.scss";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ReusableContentCard from "./contentCard/ReusableContentCard";

const BenefitsAndStatistics = ({ variant, data }) => {
  const { t } = useTranslation();

  const renderCards = useMemo(
    () =>
      data.map((item, index) => (
        <ReusableContentCard
          key={`${item.title}_${index}`}
          {...item}
          variant={variant}
          numeration={index + 1}
        />
      )),
    [data, variant]
  );

  const renderLine = useMemo(() => {
    if (variant == "statistic") {
      return <div className={scss.priority__line}></div>;
    }
  }, [variant]);

  const renderTitle = useMemo(() => {
    if (variant == "process") {
      return <h2>{t(data.map((title) => title.desc))}</h2>;
    } else {
      return <h2>{t(data.map((title) => title.desc))}</h2>;
    }
  }, [variant]);
  return (
    <div
      className={
        variant == "statistic" ? scss.statisticCard : scss.priorityCard
      }
    >
      <div className="container">
        {renderTitle}
        <div className={scss.priority__cards}>{renderCards}</div>
      </div>
      {renderLine}
    </div>
  );
};

export default BenefitsAndStatistics;
