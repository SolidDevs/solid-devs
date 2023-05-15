import { useTranslation } from "react-i18next";
import scss from "./SocialBlock.module.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SocialBlock = ({ title, fb, insta, linkedin, telega }) => {
  const { t } = useTranslation();
  return (
    <div className={scss.social__content}>
      <h3>{t(title)}</h3>
      <div className={scss.footer__icons}>
        <Link href="https://www.facebook.com/" target="blank">
          <Image src={fb} alt="fb icon" />
        </Link>
        <Link href="https://www.instagram.com/" target="blank">
          <Image src={insta} alt="instagram icon" />
        </Link>
        <Link href="https://linkedin.com/" target="blank">
          <Image src={linkedin} alt="linkedin icon" />
        </Link>
        <Link href="https://web.telegram.org/k/" target="blank">
          <Image src={telega} alt="telegram icon" />
        </Link>
      </div>
    </div>
  );
};

export default SocialBlock;
