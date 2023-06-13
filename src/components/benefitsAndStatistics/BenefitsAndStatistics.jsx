import scss from "./BenefitsAndStatistics.module.scss";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ReusableContentCard from "./contentCard/ReusableContentCard";

const BenefitsAndStatistics = ({ data, variant }) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const renderCards = useMemo(
    () =>
      data?.map((item, index) => (
        <ReusableContentCard
          key={`${item.title}_${index}`}
          {...item}
          variant={variant}
          numeration={index + 1}
          item={item}
        />
      )),
    [data, variant]
  );

  const renderLine = useMemo(() => {
    if (variant == "statistic") {
      return <div className={scss.priority__line}></div>;
    }
  }, [variant]);

  const renderHeading = useMemo(() => {
    if (variant == "statistic") {
      return <h2>{t("benefitAndStatistic.information")}</h2>;
    } else {
      return <h2>{t("benefitAndStatistic.priority")}</h2>;
    }
  }, [variant, language]);
  return (
    <div
      className={
        variant == "statistic" ? scss.statisticCard : scss.priorityCard
      }
    >
      <div className="container">
        {renderHeading}
        <div className={scss.priority__cards}>{renderCards}</div>
      </div>
      {renderLine}
    </div>
  );
};

export default BenefitsAndStatistics;
