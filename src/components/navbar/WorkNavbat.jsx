import { useCallback, useEffect, useMemo, useState } from "react";
import scss from "./WorkNavbar.module.scss";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const WorkNavbar = ({ navbarLinks, paramName, state, setState }) => {
  const router = useRouter();
  const [paramValue, setParamValue] = useState("");

  useEffect(() => {
    const { query } = router;
    const value = query[paramName];
    setParamValue(value);
  }, [router, paramName]);
  const { t } = useTranslation("");

  const handleClick = useCallback((item, index) => {
    setState(index)
    const query = router.query;
    query[paramName] = t(item);
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
          onClick={() => handleClick(item, index)}
          className={
            state === index
              ? scss.navbar__item_currentSelect
              : scss.navbar__item_nonActive
          }
        >
          {t(`${item}`)}
        </button>
      )),
    [navbarLinks, paramValue, handleClick, t]
  );
  return <nav className={scss.navbar}>{navbarItems}</nav>;
};

export default WorkNavbar;