import scss from "./StatisticsCard.module.scss";
import React from "react";

const StatisticsCard = ({ title, statistik }) => {
  return (
    <div className={scss.cards}>
      <div className={scss.cards__pictogram}><p>{statistik} +</p></div>
      <h3>{title}</h3>
    </div>
  );
};

export default StatisticsCard;
