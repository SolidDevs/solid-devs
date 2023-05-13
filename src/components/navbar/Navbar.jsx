import { useCallback, useEffect, useMemo, useState } from "react";
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

  const handleClick = useCallback((item) => {
    const query = router.query;
    query[paramName] = item;
    const path = {
      pathname: router.pathname,
      query,
    };
    router.push(path, path, { shallow: true });
  }, [paramName, router])

  const navbarItems = useMemo(
    () =>
      navbarLinks.map((item, index) => (
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
      )),
    [navbarLinks, paramValue, handleClick, t]
  );
  return <nav className={scss.navbar}>{navbarItems}</nav>;
};

export default Navbar;
