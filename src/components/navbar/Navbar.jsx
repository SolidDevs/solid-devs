import { useEffect, useMemo, useState } from "react";
import scss from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Navbar = ({ navbarLinks, paramName }) => {
  const router = useRouter();
  const [paramValue, setParamValue] = useState("");
  useEffect(() => {
    const { query } = router;
    const value = query[paramName];
    setParamValue(value);
  }, [router, paramName]);
  const { t } = useTranslation("");

  const handleClick = (item) => {
    const query = router.query;
    query[paramName] = item;
    const path = {
      pathname: router.pathname,
      query,
    };
    router.push(path, path, { shallow: true });
  };

  const navbarItems = useMemo(
    () =>
      navbarLinks.map((item, index) => (
        <button
          key={`${item}_${index}`}
          onClick={() => handleClick(item)}
          className={
            paramValue == item
              ? scss.navbar__item_currentSelect
              : scss.navbar__item
          }
        >
          {t(`navbar.${item}`)}
        </button>
      )),
    [navbarLinks, paramValue]
  );
  return <nav className={scss.navbar}>{navbarItems}</nav>;
};

export default Navbar;