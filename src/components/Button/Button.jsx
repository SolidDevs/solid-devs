import React, { useMemo } from "react";
import scss from "./Button.module.scss";
import Image from "next/image";
import arrowBlack from "../../../public/assets/images/ButtonRauseble/ArrowBlack.svg";
import arrowWhite from "../../../public/assets/images/ButtonRauseble/ArrowWhite.svg";
import { useTranslation } from "react-i18next";
const Button = ({ title, variant, withArrow }) => {
  const { t } = useTranslation();
  let background__btn = scss.background__btn;
  if (variant === "background_non") {
    background__btn = scss.background__btn_non;
  } else if (variant === "background_active") {
    background__btn = scss.background__btn_active;
  }

  let arrow = variant === "background__btn_non" ? arrowBlack : arrowWhite;
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
    []
  );
  return <div className={scss.button}>{render__btn}</div>;
};

export default Button;
