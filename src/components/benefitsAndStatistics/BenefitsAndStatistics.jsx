import scss from "./BenefitsAndStatistics.module.scss";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ReusableContentCard from "./contentCard/ReusableContentCard";
import { data_f_priority } from "@/constants/priority";
import { data_f_information } from "@/constants/information";

const BenefitsAndStatistics = ({ variant }) => {
  const { t } = useTranslation();
  let data = variant == "statistic" ? data_f_information : data_f_priority;

  const reasonsRender = useMemo(
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
    if (variant == "statistic") {
      return <h2>{t("benefitAndStatistic.information")}</h2>;
    } else {
      return <h2>{t("benefitAndStatistic.priority")}</h2>;
    }
  }, [variant]);
  return (
    <div
      className={variant == "statistic" ? scss.statisticCard : scss.priorityCard}
    >
      <div className="container">
        {renderTitle}
        <div className={scss.priority__cards}>{reasonsRender}</div>
      </div>
      {renderLine}
    </div>
  );
};

export default BenefitsAndStatistics;
