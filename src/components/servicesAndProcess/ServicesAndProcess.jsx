import scss from "./ServicesAndProcess.module.scss";
import React, { useMemo } from "react";
import ReusableCard from "./card/ReusableCard";

const ServicesAndProcess = ({ variant, data, title }) => {

  const reasonsRender = useMemo(
    () =>
      data?.map((item, index) => (
        <ReusableCard
          key={`${item.title}_${index}`}
          {...item}
          variant={variant}
          numeration={index + 1}
        />
      )),
    [data, variant]
  );

  const gridClass =
    reasonsRender?.length === 2 ? scss.main__grid : scss.main__cards;
  return (
    <>
      <div
        className={variant == "process" ? scss.processMain : scss.serviceMain}
      >
        <div className="container">
          <h2>{title}</h2>
          <div className={gridClass}>{reasonsRender}</div>
        </div>
      </div>
    </>
  );
};

export default ServicesAndProcess;
