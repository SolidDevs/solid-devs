import scss from "./Aside.module.scss";
import { asideLinks } from "../../constants/aside";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";

const Aside = () => {
  const { t } = useTranslation("");
  const [scroll,setSrcoll] = useState(0)
  const handleItemClick = () => ""

  const onScroll = () => {
    const widthScroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled= (widthScroll / height ) * 230 - 15
    setSrcoll(scrolled > 60 ? scrolled > 160 ? 240 :  scrolled * 1.5 : scrolled)
  }
  useEffect(() => {

    window.addEventListener("scroll",onScroll)
    return() => window.removeEventListener("scroll",onScroll) 

  },[])

  const memoizedValue = useMemo(() => {
    if (scroll >= 24 && scroll < 85) {
      return scss.aside_scroll_service;
    } else if (scroll >= 85 && scroll < 120) {
      return scss.aside_scroll_stack;
    } else if (scroll >= 122 && scroll < 165) {
      return scss.aside_scroll_reviews;
    } else if (scroll >= 165 && scroll < 201) {
      return scss.aside_scroll_we;
    } else if (scroll >= 201) {
      return scss.aside_scroll_project;
    } else {
      return scss.aside_scroll_it;
    }
  }, [scroll]);

  const asideItems = asideLinks.map((item, index) => (
    <a
      key={`${item.link}_${index}`}
      className={scss.aside_item_links}
      href="#/"
      onClick={() => handleItemClick(index)}
    >
      {t(item.link)}
    </a>
  ));

  return (
    <aside className={scss.aside_item}>
      <div className={memoizedValue}>
        <div className={scss.aside_scroll_before}></div>
      </div>
      <div className={scss.aside_inner}>{asideItems}</div> 
    </aside>
  );
};

export default Aside;
