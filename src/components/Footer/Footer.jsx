import React from "react";
import scss from "./Footer.module.scss";
import FooterLogo from "./components/FooterLogo/FooterLogo";
import {
  footerCompany,
  footerPages,
  footerServices,
  footerSocials,
} from "@/constants/footer";
import UnderFooter from "./components/UnderFooter/UnderFooter";
import AboutBlock from "./components/AboutUs/AboutBlock";
import PagesBlock from "./components/PagesBlock/PagesBlock";
import ServicesBlock from "./components/ServicesBlock/ServicesBlock";
import SocialBlock from "./components/SocialBock/SocialBlock";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation();
  
  const footerRender = React.useMemo(
    () => (
      <>
        <div className={scss.about__block}>
          {footerCompany.map((item, index) => (
            <AboutBlock key={`${item.title}_${index}`} {...item} />
          ))}
        </div>
        <div className={scss.about__block__mobile}>
          {footerCompany.slice(1, 2).map((item, index) => (
            <AboutBlock key={`${item.title}_${index}`} {...item} />
          ))}
        </div>
        <div className={scss.pages__block}>
          {footerPages.map((item, index) => (
            <PagesBlock key={`${item.title}_${index}`} {...item} />
          ))}
        </div>
        <div className={scss.line__mobile}></div>
        <div className={scss.solid__links}>
          <Link href="/aboutUs">{t("solidLinks.about")}</Link>
          <Link href="/carier">{t("solidLinks.career")}</Link>
        </div>
        <div className={scss.service__block}>
          {footerServices.map((item, index) => (
            <ServicesBlock key={`${item.title}_${index}`} {...item} />
          ))}
        </div>
        <div className={scss.line__mobile}></div>
        <div className={scss.social__block}>
          {footerSocials.map((item, index) => (
            <SocialBlock key={`${item.title}_${index}`} {...item} />
          ))}
        </div>
      </>
    ),
    []
  );

  return (
    <div className={scss.footer__main}>
      <div className="container">
        <div className={scss.footer__content}>
          <FooterLogo />
          <div className={scss.line}></div>
          <div className={scss.bottom__content}>{footerRender}</div>
          <div className={scss.line}></div>
          <div className={scss.underFooter}>
            <UnderFooter />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
