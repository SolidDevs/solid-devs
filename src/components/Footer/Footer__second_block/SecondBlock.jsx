import Link from "next/link";
import scss from "./SecondBlock.module.scss";
import React from "react";
import { useTranslation } from "react-i18next";

const SecondBlock = ({ title, aboutUs, jobs, outstaff }) => {
  const { t } = useTranslation();
  return (
    <div className={scss.second__block_content}>
      <h3>{t(title)}</h3>
      <Link href="#">{t(aboutUs)}</Link>
      <Link href="#">{t(jobs)}</Link>
      <Link href="#">{t(outstaff)}</Link>
    </div>
  );
};

export default SecondBlock;
