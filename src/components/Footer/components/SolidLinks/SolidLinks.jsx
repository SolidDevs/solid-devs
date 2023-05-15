import Link from "next/link";
import scss from "./SolidLinks.module.scss";
import React from "react";
import { useTranslation } from "react-i18next";

const SolidLinks = () => {
  const { t } = useTranslation();
  return (
    <div className={scss.links__main}>
      <Link href="/aboutUs">{t("solidLinks.about")}</Link>
      <Link href="/carier">{t("solidLinks.career")}</Link>
    </div>
  );
};

export default SolidLinks;
