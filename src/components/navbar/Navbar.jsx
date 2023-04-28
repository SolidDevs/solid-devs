import { useMemo } from "react";
import scss from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Navbar = ({ navbarLinks, paramName }) => {
  const router = useRouter();
  let { tour } = router.query;

  if (tour === undefined) {
    tour = "1";
  }

  const { t } = useTranslation("");

  const navbarItems = useMemo(
    () =>
      navbarLinks.map((item, index) => (
        <button
          key={`${item}_${index}`}
          onClick={() => {
            const path = {
              pathname: "",
              search: `${paramName}=${item}`,
            };
            router.push(path, path, { shallow: true });
          }}
          className={scss.navbar__item}
        >
          {t(`${item}`)}
        </button>
      )),
    [navbarLinks]
  );
  return <nav className={scss.navbar}>{navbarItems}</nav>;
};

export default Navbar;
