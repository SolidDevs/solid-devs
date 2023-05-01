import { useTranslation } from "react-i18next";
import scss from "./FourthBlock.module.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const FourthBlock = ({ title, fb, insta, linkedin, telega }) => {
  const { t } = useTranslation();
  return (
    <div className={scss.fourth__block_content}>
      <h3>{t(title)}</h3>
      <div className={scss.footer__icons}>
        <Link href="#">
          <Image src={fb} alt="fb icon" />
        </Link>
        <Link href="#">
          <Image src={insta} alt="instagram icon" />
        </Link>
        <Link href="#">
          <Image src={linkedin} alt="linkedin icon" />
        </Link>
        <Link href="#">
          <Image src={telega} alt="telegram icon" />
        </Link>
      </div>
    </div>
  );
};

export default FourthBlock;
