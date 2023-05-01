import React from "react";
import scss from "./Footer.module.scss";
import FooterLogo from "./components/FooterLogo/FooterLogo";
import {
  footerFirst,
  footerFourth,
  footerSecond,
  footerThird,
} from "@/constants/footer";
import UnderFooter from "./components/UnderFooter/UnderFooter";
import AboutBlock from "./components/AboutUs/AboutBlock";
import PagesBlock from "./components/PagesBlock/PagesBlock";
import ServicesBlock from "./components/ServicesBlock/ServicesBlock";
import SocialBlock from "./components/SocialBock/SocialBlock";

const Footer = () => {
  const footerRender = React.useMemo(
    () => (
      <>
        <div>
          {footerFirst.map((item, index) => (
            <AboutBlock key={`${item.title}_${index}`} {...item} />
          ))}
        </div>
        <div>
          {footerSecond.map((item, index) => (
            <PagesBlock key={`${item.title}_${index}`} {...item} />
          ))}
        </div>
        <div>
          {footerThird.map((item, index) => (
            <ServicesBlock key={`${item.title}_${index}`} {...item} />
          ))}
        </div>
        <div>
          {footerFourth.map((item, index) => (
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
