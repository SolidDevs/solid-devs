import React from "react";
import scss from "./Button.module.scss";
import arrrow from "./ArrowWhite.svg";
import arrow from "./ArrowBlue.svg";
import Image from "next/image";
const Button = ({ title, variable, withArrow }) => {
  const backgorund__btn = variable
    ? scss.button__btn_backgoundNon
    : scss.button__btn;

  return (
    <div className={scss.button}>
      <button className={backgorund__btn}>
        {title}
        {withArrow && (
          <Image
            className={scss.button__btn__img}
            src={arrrow}
            width={20}
            alt="arrow"
          />
        )}
      </button>
    </div>
  );
};

export default Button;
