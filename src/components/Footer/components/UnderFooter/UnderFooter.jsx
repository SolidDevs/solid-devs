import { underFooter } from "@/constants/footer";
import React from "react";
import { useTranslation } from "react-i18next";
import scss from "./UnderFooter.module.scss";

const UnderFooter = () => {
  const { t } = useTranslation();
  return underFooter.map((item, index) => (
    <div key={`${item.title}_${index}`} {...item} className={scss.underFooter}>
      <p>{t(item.right)}</p>
      <p>{t(item.politic)}</p>
    </div>
  ));
};

export default UnderFooter;
