import { useCallback, useEffect, useMemo, useState } from "react";
import scss from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import arrow from "../../../public/images/technologies/arrow.svg";
const Navbar = ({ navbarLinks, paramName, handleOpen, children }) => {
  const router = useRouter();
  const [paramValue, setParamValue] = useState("");
  const [isActive, setActive] = useState(null);
  useEffect(() => {
    const { query } = router;
    const value = query[paramName];
    setParamValue(value);
  }, [router, paramName]);
  const { t } = useTranslation("");

  const handleClick = useCallback(
    (item) => {
      const query = router.query;
      query[paramName] = t(item);
      const path = {
        pathname: router.pathname,
        query,
      };
      setActive((ActiveButton) => {
        if (ActiveButton === item) {
          return null;
        }
        return item;
      });
      router.push(path, path, { shallow: true });
    },
    [paramName, router]
  );
  const navbarItems = useMemo(
    () =>
      navbarLinks.map((item, index) => (
        <div className={scss.navbar__links} key={`${item}_${index}`}>
          <div className={scss.navbar__dekstop} key={`${item}_${index}`}>
            <button
              key={`${item}_${index}`}
              onClick={() => handleClick(item)}
              className={
                paramValue == item
                  ? scss.navbar__item_currentSelect
                  : scss.navbar__item_nonActive
              }
            >
              {t(`navbar.${item}`)}
            </button>
          </div>
          <div className={scss.navbar__adaptive}>
            <div className={scss.navbar__wrapper}>
              <button
                key={`${item}_${index}`}
                onClick={() => {
                  handleClick(item);
                  handleOpen();
                }}
                className={
                  paramValue == item
                    ? scss.navbar__item_currentSelect
                    : scss.navbar__item_nonActive
                }
              >
                {t(`navbar.${item}`)}
              </button>
              <div>
                <Image
                  className={isActive === item ? scss.icon__active : scss.icon}
                  src={arrow}
                  width={14}
                  height={8}
                />
              </div>
            </div>
            {isActive === item && (
              <div
                className={`${scss.navbar__technologies} ${
                  isActive ? scss.show : ""
                }`}
              >
                {children}
              </div>
            )}
          </div>
        </div>
      )),
    [navbarLinks, paramValue, handleClick, t]
  );
  return <nav className={scss.navbar}>{navbarItems}</nav>;
};

export default Navbar;
