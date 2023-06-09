import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import arrow from "/public/images/Header/arrow.svg";
import scss from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import i18n from "i18next";
import { header__navs } from "@/constants/header";
import { service__navs } from "@/constants/header";
import { inputs } from "@/constants/header";
import close from "/public/images/Header/close.svg";
import Logo from "../logo/Logo";
import HeaderMobileMenu from "../headerMobileMenu/HeaderMobileMenu";
import emailjs from "@emailjs/browser";
import SimpleLoader from "../simpleLoader/SimpleLoader";
const Header = () => {
  const { t, language } = i18n;
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(false);
  const { route } = useRouter();
  const [selectLan, setSelectLan] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const [userLanguage, setUserLanguage] = useState();


  useEffect(() => {
    if (userLanguage) {
      if (userLanguage == "ru") {
        setSelectLan(true)
        i18n.changeLanguage("ru");
      } else {
        setSelectLan(false)
        i18n.changeLanguage("en");
      }
    }
  }, [userLanguage])

  useEffect(() => {
    const detectUserLanguage = () => {
      const language = navigator.language || navigator.userLanguage;
      setUserLanguage(language);
    };
    detectUserLanguage();
  }, []);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    setSelectLan(storedLanguage == "ru" ? true : false);
    i18n.changeLanguage(storedLanguage);
  }, []);

  const handleClickOpen = () => {
    setServiceIndex(true);
    setIsServiceModalOpen(true);
  };

  const handleClickClose = () => {
    setIsServiceModalOpen(false);
  }

  const handleButtonClick = () => {
    setModalIndex(true);
    setIsContactModalOpen(!isContactModalOpen);
    setIsServiceModalOpen(false);
  };

  const [inputValues, setInputValues] = useState({
    name: "",
    number: "",
    email: "",
    company: "",
    usHelp: "",
  });

  const change = () => {
    i18n.changeLanguage(!selectLan ? "ru" : "en");
    localStorage.setItem("language", !selectLan ? "ru" : "en");
  };
  const ru = () => {
    setSelectLan(true);
    change();
  };
  const en = () => {
    setSelectLan(false);
    change();
  };
  useEffect(() => {
    document.body.style.height =
      isContactModalOpen || isServiceModalOpen ? "100vh" : "auto";
    document.body.style.overflow =
      isContactModalOpen || isServiceModalOpen ? "hidden" : "visible";
  }, [isContactModalOpen, isServiceModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };
  const sendForm = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    setIsContactModalOpen(false);
    setInputValues({
      name: "",
      number: "",
      email: "",
      company: "",
      usHelp: "",
    });

    emailjs.send("service_s1rx1ps", "template_bx03nbz", inputValues, "r5POqpjOCvzJRuMU-")
      .then(function () {
        alert(t("emailJs.success"));
        setIsLoading(false)
      }, function () {
        alert(t("emailJs.failed"));
        setIsLoading(false)
      });
  };

  const headerNavs = useMemo(
    () =>
      header__navs.map(({ path, title, index }) => (
        <Link
          key={`${title}_${index}`}
          href={path}
          className={
            route === path
              ? scss.header__nav_active
              : scss.header__nav_notActive
          }
        >
          <p>{t(title)}</p>
        </Link>
      )),
    [route, language]
  );

  const serviceNavs = useMemo(
    () =>
      service__navs.map(({ title, path, index }) => (
        <Link
          key={`${title}_${index}`}
          href={path}
          className={
            route == path ? scss.modal__nav_active : scss.modal__nav_notActive
          }
        >
          {t(title)}
        </Link>
      )),
    [language]
  );

  const contactInputs = useMemo(
    () =>
      inputs.map(({ title, id, name, type }) => (
        <input
          placeholder={t(title)}
          type={type}
          key={`${title}_${id}`}
          value={inputValues[name]}
          name={name}
          onChange={handleInputChange}
          required
        />
      )),
    [language, inputValues]
  );

  const contactModal = useMemo(
    () =>
      modalIndex && (
        <header
          className={
            isContactModalOpen
              ? scss.header__contactModal_active
              : scss.header__contactModal_notActive
          }
          onClick={handleButtonClick}
        >
          <section
            className={scss.header__contactModal}
            onClick={(event) => event.stopPropagation()}
          >
            <header>
              <h1>{t("header.your-project")}</h1>
              <Image
                src={close}
                width={26}
                height={26}
                onClick={handleButtonClick}
                alt="close"
              />
            </header>
            <form onSubmit={sendForm} >
              <main>{contactInputs}</main>
              <footer>
                <input
                  placeholder={t("header.us-help")}
                  type="text"
                  name="usHelp"
                  value={inputValues["usHelp"]}
                  required
                  onChange={handleInputChange}
                />
                <button type="sumbit" className={scss.header__button}>
                  {t("header.send")}
                </button>
              </footer>
            </form>
          </section>
        </header>
      )
  );

  const serviceModal = useMemo(
    () =>
      serviceIndex && (
        <footer
          className={
            isServiceModalOpen ? scss.modal_active : scss.modal_notActive
          }
        >
          <main onMouseLeave={() => handleClickClose()} onClick={(event) => event.stopPropagation()}>
            <h2>{t("header.our_services")}</h2>
            <nav>{serviceNavs}</nav>
          </main>
        </footer>
      )
  );
  if (isLoading) return <SimpleLoader />
  return (
    <section className={scss.header}>
      {contactModal}
      <aside className={scss.header_left}>
        <Link href={"/"}>
          <Logo />
        </Link>
        <nav className={scss.header__navs}>
          {headerNavs}
          <label
            onMouseOver={() => handleClickOpen()}
            className={
              !isServiceModalOpen
                ? scss.header__option_notActive
                : scss.header__option_active
            }
          >
            <p >{t("header.service")}</p>
            <Image src={arrow} alt="arrow" width={16} height={8} />
          </label>
        </nav>
      </aside>
      <aside className={scss.header_right}>
        <div className={scss.header__language}>
          <p
            onClick={en}
            className={
              !selectLan ? scss.header__lan_active : scss.header__lan_notActive
            }
          >
            En
          </p>
          <p
            onClick={ru}
            className={
              selectLan ? scss.header__lan_active : scss.header__lan_notActive
            }
          >
            Ру
          </p>
        </div>
        <label onClick={handleButtonClick}>
          <Button title={t("header.button")} withArrow={false} />
        </label>
      </aside>
      <HeaderMobileMenu />
      {serviceModal}
    </section>
  );
};

export default Header;
