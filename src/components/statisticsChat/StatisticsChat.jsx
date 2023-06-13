import scss from "./StatisticsChat.module.scss";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import StatisticsCard from "./statisticsCard/StatisticsCard";

const StatisticsChat = ({ data, variant }) => {
  const { t } = useTranslation();

  const renderCards = useMemo(
    () =>
      data?.map((item, index) => (
        <StatisticsCard
          key={`${item.title}_${index}`}
          {...item}
          variant={variant}
          numeration={index + 1}
          item={item}
        />
      )),
    [data, variant]
  );

  return (
    <div
      className={scss.statisticCard}
    >
      <div className="container">
        <h2>{t("benefitAndStatistic.information")}</h2>
        <div className={scss.priority__cards}>{renderCards}</div>
      </div>
      <div className={scss.priority__line}></div>
    </div>
  );
};

export default StatisticsChat;
