import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "/public/images/Header/arrow.svg";
import scss from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import i18n from "i18next";

const Header = () => {
  const { t } = i18n;
  const [index, setIndex] = useState(false);
  const [lan, setLan] = useState(false);
  const [en, setEn] = useState(t("header.languageFullEn"));
  const [ru, setRu] = useState(t("header.languageFullRu"));
  const [language, setLanguage] = useState(t("header.languageEn"));
  const { route } = useRouter();
  const click = () => setIndex(!index);
  const change = () => {
    setLan(!lan);
    setIndex(!index);
    i18n.changeLanguage(!lan ? "ru" : "en");
  };
  useEffect(() => {
    setLanguage(!lan ? t("header.languageEn") : t("header.languageRu"));
    setRu(lan ? t("header.languageFullEn") : t("header.languageFullRu"));
    setEn(!lan ? t("header.languageFullEn") : t("header.languageFullRu"));
  }, [lan]);

  return (
    <section className={scss.header}>
      <aside className={scss.header_left}>
        <Link href={"/"}>
          <span className={scss.header_left__title}>SOLID DEVS</span>
        </Link>
        <label className={scss.header_left__items}>
          <Link
            href={"/about"}
            className={
              route == "/about"
                ? scss.header_left__items__isActivelink
                : scss.header_left__items__link
            }
          >
            <p>{t("header.about")}</p>
          </Link>
          <Link
            href={"/career"}
            className={
              route == "/about"
                ? scss.header_left__items__isActivelink
                : scss.header_left__items__link
            }
          >
            <p>{t("header.career")}</p>
          </Link>
          <div className={scss.header_left__items__option}>
            <p>{t("header.service")}</p>
            <Image
              src={arrow}
              alt="arrow"
              width={16}
              height={8}
              style={{ margin: "0 10px" }}
            />
          </div>
        </label>
      </aside>
      <aside className={scss.header_right}>
        <div className={scss.header_right__language} onClick={click}>
          <p>{language}</p>
          <Image src={arrow} alt="arrow" width={16} height={8} />
        </div>
        <Button title={t("header.button")} withArrow={false} />
        {index && (
          <label className={scss.header_right__option}>
            <p onClick={change}>{ru}</p>
            <p>{en}</p>
          </label>
        )}
      </aside>
    </section>
  );
};

export default Header;
