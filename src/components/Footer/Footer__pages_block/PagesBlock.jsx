import Link from "next/link";
import scss from "./PagesBlock.module.scss";
import React from "react";
import { useTranslation } from "react-i18next";

const PagesBlock = ({ title, aboutUs, jobs, outstaff }) => {
  const { t } = useTranslation();
  return (
    <div className={scss.pages__block_content}>
      <h3>{t(title)}</h3>
      <Link href="#">{t(aboutUs)}</Link>
      <Link href="#">{t(jobs)}</Link>
      <Link href="#">{t(outstaff)}</Link>
    </div>
  );
};

export default PagesBlock;
