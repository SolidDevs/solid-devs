import React from "react";
import scss from "./Footer.module.scss";
import FooterLogo from "./Footer__logo/FooterLogo";
import {
  footerFirst,
  footerFourth,
  footerSecond,
  footerThird,
} from "@/constants/footer";
import FirstBlock from "./Footer__first_block/FirstBlock";
import UnderFooter from "./Under__footer/UnderFooter";
import SecondBlock from "./Footer__second_block/SecondBlock";
import ThirdBlock from "./Footer__third_block/ThirdBlock";
import FourthBlock from "./Footer__fourth_block/FourthBlock";

const Footer = () => {
  const footerRender = React.useMemo(
    () => (
      <>
        <div>
          {footerFirst.map((item, index) => (
            <FirstBlock key={`${item.title}_${index}`} {...item} />
          ))}
        </div>
        <div>
          {footerSecond.map((item, index) => (
            <SecondBlock key={`${item.title}_${index}`} {...item} />
          ))}
        </div>
        <div>
          {footerThird.map((item, index) => (
            <ThirdBlock key={`${item.title}_${index}`} {...item} />
          ))}
        </div>
        <div>
          {footerFourth.map((item, index) => (
            <FourthBlock key={`${item.title}_${index}`} {...item} />
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
