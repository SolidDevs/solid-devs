import React, { useMemo, useState } from "react";
import Image from "next/image";
import arrow from "/public/images/Header/arrow.svg";
import scss from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import i18n from "i18next";

const Header = () => {
  const { t } = i18n;
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isRussianLanguage, setIsRussianLanguage] = useState(false);
  const { route } = useRouter();
  const click = () => setIsLanguageOpen(!isLanguageOpen);
  const change = () => {
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

  return (
    <section className={scss.header}>
      <aside className={scss.header__left}>
        <Link href={"/"}>
          <span className={scss.header__leftTitle}>SOLID DEVS</span>
        </Link>
        <nav className={scss.header__leftNavs}>
          <Link
            href={"/about"}
            className={
              route == "/about"
                ? scss.header__leftItemsIsActiveLink
                : scss.header__leftItemsLink
            }
          >
            <p>{t("header.about")}</p>
          </Link>
          <Link
            href={"/career"}
            className={
              route == "/about"
                ? scss.header__leftItemsIsActiveLink
                : scss.header__leftItemsLink
            }
          >
            <p>{t("header.career")}</p>
          </Link>
          <div className={scss.header__leftItemsOption}>
            <p>{t("header.service")}</p>
            <Image
              src={arrow}
              alt="arrow"
              width={16}
              height={8}
            />
          </div>
        </nav>
      </aside>
      <aside className={scss.header__right}>
        <div className={scss.header__rightLanguage} onClick={click}>
          <p
            style={{ marginRight: isRussianLanguage ? "40px" : "45px" }}
          >
            {language}
          </p>
          <Image src={arrow} alt="arrow" width={16} height={8} />
        </div>
        <Button title={t("header.button")} withArrow={false} />
        {isLanguageOpen && (
          <label
            className={scss.header__rightOption}
            style={{ right: isRussianLanguage ? "200px" : "177px" }}
          >
            <p onClick={change}>{languageSecondFull}</p>
            <p>{languageFull}</p>
          </label>
        )}
      </aside>
    </section>
  );
};

export default Header;
