import { useMemo } from "react";
import scss from "./Aside.module.scss";
import { asideLinks } from "../../constants/aside";
import { useTranslation } from "react-i18next";

const Aside = () => {
  const { t } = useTranslation("");
  const asideItems = useMemo(
    () =>
      asideLinks.map((item) => (
        <a key={item.id} className={scss.aside_item_links} href="#/">
          {t(item.link)}
        </a>
      )),
    []
  );
  return (
    <aside className={scss.aside_item}>
      <div className={scss.aside_scroll}></div>
      <div className={scss.aside_inner}>{asideItems}</div>
    </aside>
  );
};

export default Aside;
