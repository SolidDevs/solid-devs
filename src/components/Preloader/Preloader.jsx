import React from "react";
import scss from "./Preloader.module.scss";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <>
      <div className={scss.loading}>
        <div className={scss.loading__preloader}></div>
      </div>
    </>
  );
};

export default Preloader;
