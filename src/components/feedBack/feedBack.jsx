import React, { useMemo } from "react";
import scss from "./FeedBack.module.scss";
import { feedBackArr } from "@/constants/feedBack";
import FeedBackCard from "./FeedBackCard/FeedBackCard.jsx";
const FeedBack = () => {
  const renderCard = useMemo(
    () => feedBackArr.map((el) => <FeedBackCard {...el} key={el.title} />),
    [feedBackArr]
  );
  return (
    <div className={scss.talk}>
      <h1>What people say</h1>
      <div className={scss.talk__slide}>{renderCard}</div>
    </div>
  );
};

export default FeedBack;
