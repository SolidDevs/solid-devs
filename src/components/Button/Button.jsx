import React from "react";
import scss from "./Button.module.scss";
import arrowWhite from "../../../public/assets/ArrowWhite.svg";
import arrowBlue from "../../../public/assets/ArrowBlue.svg";
import Image from "next/image";
const Button = ({ title, variable, withArrow }) => {
  const backgorund__btn = variable
    ? scss.button__btn_backgoundNon
    : scss.button__btn;
  const arrow = variable ? arrowBlue : arrowWhite;
  return (
    <div className={scss.button}>
      <button className={backgorund__btn}>
        {title}
        {withArrow && (
          <Image
            className={scss.button__btn__img}
            src={arrow}
            width={20}
            alt="arrow"
          />
        )}
      </button>
    </div>
  );
};

export default Button;
