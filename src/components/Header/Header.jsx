import React, { useMemo, useState } from "react";
import Image from "next/image";
import arrow from "/public/images/Header/arrow.svg";
import scss from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import i18n from "i18next";
import { navs } from "@/constants/header";
import { modal_navs } from "@/constants/header";

const Header = () => {
  const { t ,language } = i18n;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lan ,setLan] = useState(false)
  const { route } = useRouter();
  const handleClick = () => setIsModalOpen(!isModalOpen);
  const change = () => {
    i18n.changeLanguage( !lan ? "ru" : "en");
  };
  const ru = () => {
    setLan(true)
    change()
  }
  const en = () => {
    setLan(false)
    change()
  }
  const headerNavs = useMemo(
    () =>
      navs.map(({ link, text }) => (
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
      )),
    [route,language]
  );

  const modal__navs = useMemo(() =>
    modal_navs.map(({ text, link }) => (
      <Link key={link} href={link} className={scss.modal__nav}>
        {t(text)}
      </Link>
    )),[language]
  );
  const modal = useMemo(() => {
    return (
      isModalOpen && (
        <section className={scss.modal} onClick={handleClick}>
          <main onClick={event => event.stopPropagation()}>
            <h2>{t("header.our_services")}</h2>
            <nav>{modal__navs}</nav>
          </main>
        </section>
      )
    );
  }, [isModalOpen,language]);

  return (
    <section className={scss.header}>
      <aside className={scss.header_left}>
        <Link href={"/"}>
          <span className={scss.header__title}>SOLID DEVS</span>
        </Link>
        <nav className={scss.header__navs}>
          {headerNavs}
          <label
            className={scss.header__option}
            onClick={handleClick} 
            style={{background : isModalOpen ? "#F5F5F5" : "$white"}}
          >
            <p>{t("header.service")}</p>
            <Image src={arrow} alt="arrow" width={16} height={8} />
          </label>
        </nav>
      </aside>
      <aside className={scss.header_right}>
        <div className={scss.header__language}>
          <p onClick={en}>En</p>
          <p onClick={ru}>Ру</p>
        </div>
        <Button title={t("header.button")} withArrow={false} />
      </aside>
      {modal}
    </section>
  );
};

export default Header;
