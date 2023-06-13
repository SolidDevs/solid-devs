import React, { useMemo } from "react";
import ReusableCard from "../servicesAndProcess/card/ReusableCard";
import scss from "./Service.module.scss";
const Service = ({ data, title }) => {
  const reasonsRender = useMemo(
    () =>
      data?.map((item, index) => (
        <ReusableCard
          key={`${item.title}_${index}`}
          {...item}
          numeration={index + 1}
        />
      )),
    [data]
  );
  return (
    <>
      <div className={scss.serviceMain}>
        <div className="container">
          <h2>{title}</h2>
          <div className={scss.main__grid}>{reasonsRender}</div>
        </div>
      </div>
    </>
  );
};

export default Service;
