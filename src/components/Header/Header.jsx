import React, { useMemo, useState } from "react";
import Image from "next/image";
import arrow from "/public/images/Header/arrow.svg";
import scss from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import i18n from "i18next";
import { navs } from "@/constants/header";

const Header = () => {
  const { t } = i18n;
  const [isOpen, setIsOpen] = useState(false);
  const [isRussianLanguage, setIsRussianLanguage] = useState(false);
  const { route } = useRouter();
  const handleClick = () => setIsOpen(!isOpen);
  const change = () => {
    setIsOpen(!isOpen);
    setIsRussianLanguage(!isRussianLanguage);
    i18n.changeLanguage(isRussianLanguage ? "en" : "ru");
  };

  const language = useMemo(
    () => (isRussianLanguage ? t("header.languageRu") : t("header.languageEn")),
    [isRussianLanguage]
  );
  const languageFull = useMemo(
    () =>
      isRussianLanguage
        ? t("header.languageFullRu")
        : t("header.languageFullEn"),
    [isRussianLanguage]
  );
  const languageSecondFull = useMemo(
    () =>
      !isRussianLanguage
        ? t("header.languageFullRu")
        : t("header.languageFullEn"),
    [isRussianLanguage]
  );
  const languageSelect = useMemo(() => {
    return (
      isOpen && (
        <label
          className={scss.header__select}
          style={{ right: isRussianLanguage ? "200px" : "177px" }}
        >
          <p onClick={change}>{languageSecondFull}</p>
          <p>{languageFull}</p>
        </label>
      )
    );
  }, [isOpen]);

  const headerNavs = useMemo(
    () =>
      navs.map(
        ({ link, text }) => (
          (
            <Link
              key={link}
              href={link}
              className={
                route === link
                  ? scss.header__nav_isActive
                  : scss.header__nav_notActive
              }
            >
              <p>{t(text)}</p>
            </Link>
          )
        )
      ),
    [route, isOpen]
  );

  return (
    <section className={scss.header}>
      <aside className={scss.header_left}>
        <Link href={"/"}>
          <span className={scss.header__title}>SOLID DEVS</span>
        </Link>
        <nav className={scss.header__navs}>{headerNavs}</nav>
      </aside>
      <aside className={scss.header_right}>
        <div className={scss.header__language} onClick={handleClick}>
          <p style={{ marginRight: isRussianLanguage ? "40px" : "45px" }}>
            {language}
          </p>
          <Image src={arrow} alt="arrow" width={16} height={8} />
        </div>
        <Button title={t("header.button")} withArrow={false} />
        {languageSelect}
      </aside>
    </section>
  );
};

export default Header;
