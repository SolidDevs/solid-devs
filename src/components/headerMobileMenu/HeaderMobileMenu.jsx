import scss from "./HeaderMobileMenu.module.scss";
import Burger from "public/images/Header/burger.svg";
import CloseIcon from "public/images/Header/closeX.svg";
import DownArrow from "public/images/Header/downArrow.svg";
import RightArrow from "public/images/Header/rightArrow.svg";
import Fb from "public/images/Header/fbLight.svg";
import Insta from "public/images/Header/instaLight.svg";
import Linked from "public/images/Header/inLight.svg";
import Telega from "public/images/Header/telegLight.svg";
import { header__navs, service__navs } from "@/constants/header";
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import i18n from "i18next";
import Link from "next/link";
import Image from "next/image";
import HeaderMobileModal from "../headerMobileModal/HeaderMobileModal";

const HeaderMobileMenu = () => {
  const [isServiceModalOpenMobile, setIsServiceModalOpenMobile] =
    useState(false);
  const [lan, setLan] = useState(i18n.language == "en" ? false : true);
  const [isContactModal, setIsContactModal] = useState(false);
  const { route } = useRouter();
  const [isActive, setIsActive] = useState(false);
  const handleClickMobile = () =>
    setIsServiceModalOpenMobile(!isServiceModalOpenMobile);
  const { t, language } = i18n;

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

  const click = () => setIsContactModal(!isContactModal);

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "visible";
  }, [isActive]);

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

  const headerMobIconsRender = useMemo(() => (
    <div className={scss.mobile__footer__bottom}>
      <Link href="https://www.facebook.com/" target="blank">
        <Image src={Fb} alt="fb icon" width={53.85} height={53.85} />
      </Link>
      <Link href="https://www.instagram.com/" target="blank">
        <Image src={Insta} alt="instagram icon" width={53.85} height={53.85} />
      </Link>
      <Link href="https://linkedin.com/" target="blank">
        <Image src={Linked} alt="linkedin icon" width={53.85} height={53.85} />
      </Link>
      <Link href="https://web.telegram.org/k/" target="blank">
        <Image src={Telega} alt="telegram icon" width={53.85} height={53.85} />
      </Link>
    </div>
  ));
  return (
    <div className={scss.burger__main}>
      <div
        className={isContactModal ? scss.burger_none : scss.burger}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? (
          <Image src={CloseIcon} width={12} height={12} alt="iconX" />
        ) : (
          <Image src={Burger} width={24} height={15} alt="burger" />
        )}
      </div>
      <div
        className={
          isActive
            ? [scss.burger__menu, scss.active].join(" ")
            : scss.burger__menu
        }
      >
        <nav className={scss.burger__navs}>
          {headerNavs}
          <label
            id={scss.burger__accardion}
            className={
              !isServiceModalOpenMobile
                ? scss.header__option_notActive
                : scss.header__option_active
            }
            onClick={handleClickMobile}
          >
            <p>{t("header.our_services")}</p>
            <div className={scss.mobile__arrow}>
              {!isServiceModalOpenMobile ? (
                <Image src={DownArrow} width={14} height={8} alt="arrow" />
              ) : (
                <Image src={RightArrow} width={8} height={14} alt="arrow" />
              )}
            </div>
          </label>
        </nav>
        <div
          className={
            isServiceModalOpenMobile
              ? scss.modal_active__mobile
              : scss.modal_notActive__mobile
          }
          onClick={handleClickMobile}
        >
          <main onClick={(event) => event.stopPropagation()}>
            <nav>{serviceNavs}</nav>
          </main>
        </div>
        <div className={scss.langs}>
          <p
            onClick={ru}
            className={
              lan ? scss.mobile__lang__active : scss.mobile__lang__notActive
            }
          >
            Русский
          </p>
          <p
            onClick={en}
            className={
              !lan ? scss.mobile__lang__active : scss.mobile__lang__notActive
            }
          >
            English
          </p>
        </div>
        <div className={scss.mobile__footer__main}>
          <div className={scss.mobile__footer__top}>
            <HeaderMobileModal click={click} />
            <a className={scss.contact} href="mailto:privet@solid.kg">
              privet@solid.kg
            </a>
            <a className={scss.contact} href="tel:+996707777777">
              +996 (707) 77-77-77
            </a>
          </div>
          <div>{headerMobIconsRender}</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
