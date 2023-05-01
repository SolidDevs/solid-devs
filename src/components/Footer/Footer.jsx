import React from "react";
import scss from "./Footer.module.scss";
import FooterLogo from "./Footer__logo/FooterLogo";
import {
  footerFirst,
  footerFourth,
  footerSecond,
  footerThird,
} from "@/constants/footer";
import UnderFooter from "./Under__footer/UnderFooter";
import AboutBlock from "./Footer__about_us/AboutBlock";
import PagesBlock from "./Footer__pages_block/PagesBlock";
import ServicesBlock from "./Footer__services_block/ServicesBlock";
import SocialBlock from "./Footer__social_block/SocialBlock";

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
