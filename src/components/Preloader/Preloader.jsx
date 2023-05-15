import React from "react";
import scss from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <>
      <div className={scss.loading}>
        <div className={scss.loading__preloader}></div>
      </div>
    </>
  );
};

export default Preloader;
