import scss from "./BenefitsAndStatistics.module.scss";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ReusableContentCard from "./contentCard/ReusableContentCard";
import { benefitsData } from "@/constants/benefits";
import { statisticsData } from "@/constants/statistics";

const BenefitsAndStatistics = ({ variant }) => {
  const { t } = useTranslation();
  let data = variant == "process" ? statisticsData : benefitsData;

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
    if (variant == "process") {
      return <div className={scss.main__line}></div>;
    }
  }, [variant]);

  const renderTitle = useMemo(() => {
    if (variant == "process") {
      return <h2>{t("benefitAndStatistic.statisticsTitle")}</h2>;
    } else {
      return <h2>{t("benefitAndStatistic.benefitsTitle")}</h2>;
    }
  }, [variant]);
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

export default BenefitsAndStatistics;
