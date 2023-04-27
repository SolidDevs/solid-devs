import { useMemo } from "react";
import scss from "./Navbar.module.scss";
import { navbarLinks } from "@/constants/navbar";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation("");
  const navbarItems = useMemo(
    () =>
      navbarLinks.map((item, index) => (
        <a key={`${item.title}_${index}`} className={scss.navbar__item}>
          {t(`${item.title}`)}
        </a>
      )),
    []
  );
  return <nav className={scss.navbar}>{navbarItems}</nav>;
};

export default Navbar;
