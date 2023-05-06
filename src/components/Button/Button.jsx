import React, { useMemo } from "react";
import scss from "./Button.module.scss";
import Image from "next/image";
import arrowBlack from "../../../public/assets/images/ButtonRauseble/ArrowBlack.svg";
import arrowWhite from "../../../public/assets/images/ButtonRauseble/ArrowWhite.svg";
import { useTranslation } from "react-i18next";
const Button = ({ title, variant, withArrow }) => {
  const { t } = useTranslation();
  let background__btn = scss.btn_blue;
  if (variant === "btn__no_bg") {
    background__btn = scss.btn__no_bg;
  } else if (variant === "btn__light_blue") {
    background__btn = scss.btn__light_blue;
  }

  let arrow = variant === "btn__no_bg" ? arrowBlack : arrowWhite;
  const render__btn = useMemo(
    () => (
      <button className={background__btn}>
        {t(title)}
        {withArrow && (
          <Image
            className={scss.button__btn_arrow}
            src={arrow}
            width={20}
            alt="arrow"
          />
        )}
      </button>
    ),
    [arrow, background__btn, t, title, withArrow]
  );
  return <div className={scss.button}>{render__btn}</div>;
};

export default Button;