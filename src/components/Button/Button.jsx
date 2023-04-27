import React, { useMemo } from "react";
import scss from "./Button.module.scss";
import arrowWhite from "../../../public/assets/ArrowWhite.svg";
import arrowBlue from "../../../public/assets/ArrowBlue.svg";
import Image from "next/image";
const Button = ({ title, variant, withArrow }) => {
  let background__btn;
  if (variant === "background_none") {
    background__btn = scss.background__btn_non;
  } else {
    background__btn = scss.background__btn_active;
  }

  let arrow = variant ? arrowBlue : arrowWhite;
  const render__btn = useMemo(
    () => (
      <button className={background__btn}>
        {title}
        {withArrow && (
          <Image
            className={scss.button__btn_img}
            src={arrow}
            width={20}
            alt="arrow"
          />
        )}
      </button>
    ),
    [title, withArrow]
  );
  return <div className={scss.button}>{render__btn}</div>;
};

export default Button;
