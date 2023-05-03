import Image from "next/image";
import scss from "./FooterLogo.module.scss";
import React from "react";
import logo from "../../../../../public/assets/images/Footer/Solid__icon.svg";
import logoRec from "../../../../../public/assets/images/Footer/Solid__icon2.svg";

const FooterLogo = () => {
  return (
    <div className={scss.footer__logo}>
      <Image src={logo} alt="solid icon" />
      <Image src={logoRec} alt="solid icon" />
    </div>
  );
};

export default FooterLogo;
