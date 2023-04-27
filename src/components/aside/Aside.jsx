import { useMemo } from "react";
import scss from "./Aside.module.scss";
import { asideLinks } from "../../constants/aside";
import { useTranslation } from "react-i18next";

const Aside = () => {
  const { t } = useTranslation("");
  const asideItems = useMemo(
    () =>
      asideLinks.map((item,index) => (
        <a key={`${item.link}_${index}`} className={scss.__links} href="#/">
          {t(item.link)}
        </a>
      )),
    [asideLinks]
  );
  return (
    <aside className={scss.aside}>
      <div className={scss.__scroll}></div>
      <div className={scss.__item}>{asideItems}</div>
    </aside>
  );
};

export default Aside;
