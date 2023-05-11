import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import arrow from "/public/images/Header/arrow.svg";
import scss from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import i18n from "i18next";
import { navs } from "@/constants/header";
import { modal_navs } from "@/constants/header";
import { cntModal_inputs } from "@/constants/header";
import krestik from "/public/images/Header/krestic.svg";

const Header = () => {
  const { t, language } = i18n;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCntModalOpen, setIsCntModalOpen] = useState(false);
  const [lan, setLan] = useState(false);
  const { route } = useRouter();
  const handleClick = () => setIsModalOpen(!isModalOpen);
  const handleButtonClick = () => setIsCntModalOpen(!isCntModalOpen);
  const [inputValues, setInputValues] = useState({
    username: "",
    number: "",
    email: "",
    company: "",
    usHelp: "",
  });
  const change = () => {
    i18n.changeLanguage(!lan ? "ru" : "en");
  };
  const ru = () => {
    setLan(true);
    change();
  };
  const en = () => {
    setLan(false);
    change();
  };

  useEffect(() => {
    document.body.style.height = isCntModalOpen ? "100vh" : "auto";
    document.body.style.overflow = isCntModalOpen ? "hidden" : "visible";
  }, [isCntModalOpen]);

  const handleInputChange = (e) => {
    inputValues;
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
    [route, language]
  );

  const modal__navs = useMemo(
    () =>
      modal_navs.map(({ text, link }) => (
        <Link key={link} href={link} className={scss.modal__nav}>
          {t(text)}
        </Link>
      )),
    [language]
  );

  const cnt_inputs = useMemo(
    () =>
      cntModal_inputs.map(({ text, id, name }) => (
        <input
          placeholder={t(text)}
          type="text"
          key={id}
          name={name}
          onChange={handleInputChange}
        />
      )),
    [language]
  );

  return (
    <section className={scss.header}>
      <header
        className={
          isCntModalOpen
            ? scss.header__cntModal_isActive
            : scss.header__cntModal_notActive
        }
        onClick={handleButtonClick}
      >
        <section
          className={scss.header__cntModal}
          onClick={(event) => event.stopPropagation()}
        >
          <header>
            <h1>{t("header.your-project")}</h1>
            <Image
              src={krestik}
              width={26}
              height={26}
              onClick={handleButtonClick}
              alt="krestic"
            />
          </header>
          <main>{cnt_inputs}</main>
          <footer>
            <input
              placeholder={t("header.us-help")}
              type="text"
              name="usHelp"
              onChange={handleInputChange}
            />
            <button className={scss.header__button} onClick={handleButtonClick}>
              {t("header.send")}
            </button>
          </footer>
        </section>
      </header>
      <aside className={scss.header_left}>
        <Link href={"/"}>
          <span className={scss.header__title}>SOLID DEVS</span>
        </Link>
        <nav className={scss.header__navs}>
          {headerNavs}
          <label
            className={
              !isModalOpen
                ? scss.header__option_notActive
                : scss.header__option_isActive
            }
            onClick={handleClick}
          >
            <p>{t("header.service")}</p>
            <Image src={arrow} alt="arrow" width={16} height={8} />
          </label>
        </nav>
      </aside>
      <aside className={scss.header_right}>
        <div className={scss.header__language}>
          <p
            onClick={en}
            className={
              !lan ? scss.header__lan_isActive : scss.header__lan_notActive
            }
          >
            En
          </p>
          <p
            onClick={ru}
            className={
              lan ? scss.header__lan_isActive : scss.header__lan_notActive
            }
          >
            Ру
          </p>
        </div>
        <label onClick={handleButtonClick}>
          {" "}
          <Button title={t("header.button")} withArrow={false} />
        </label>
      </aside>
      <footer
        className={isModalOpen ? scss.modal_isActive : scss.modal_notActive}
        onClick={handleClick}
      >
        <main onClick={(event) => event.stopPropagation()}>
          <h2>{t("header.our_services")}</h2>
          <nav>{modal__navs}</nav>
        </main>
      </footer>
    </section>
  );
};

export default Header;
