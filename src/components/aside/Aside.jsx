import scss from "./Aside.module.scss";
import { asideLinks } from "../../constants/aside";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Aside = () => {
  const { t } = useTranslation();
  const [currentSection, setCurrentSection] = useState(null);
  const [index, setIndex] = useState(scss.aside_scroll_it);

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = document.elementFromPoint(
        window.innerWidth / 2,
        window.innerHeight / 2
      );
      if (currentSection) {
        const currentSectionId = currentSection.getAttribute("id");
        setCurrentSection(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  const change = (href) => {
    if (href === "#itProject") {
      setIndex(scss.aside_scroll_it);
    } else if (href === "#service") {
      setIndex(scss.aside_scroll_service);
    } else if (href === "#technologies") {
      setIndex(scss.aside_scroll_stack);
    } else if (href === "#team") {
      setIndex(scss.aside_scroll_team);
    } else if (href === "#feedback") {
      setIndex(scss.aside_scroll_reviews);
    } else if (href === "#ourProject") {
      setIndex(scss.aside_scroll_project);
    }
  };

  const aside__links = asideLinks.map((item, index) => (
    <a
      key={`${item.link}_${index}`}
      className={scss.aside_item_links}
      href={item.path}
      onClick={() => change(item.path)}
    >
      {t(item.link)}
    </a>
  ));

  useEffect(() => {
    if (currentSection === "itProject") {
      setIndex(scss.aside_scroll_it);
    } else if (currentSection === "service") {
      setIndex(scss.aside_scroll_service);
    } else if (currentSection === "technologies") {
      setIndex(scss.aside_scroll_stack);
    } else if (currentSection === "team") {
      setIndex(scss.aside_scroll_team);
    } else if (currentSection === "feedback") {
      setIndex(scss.aside_scroll_reviews);
    } else if (currentSection === "ourProject") {
      setIndex(scss.aside_scroll_project);
    }
  }, [currentSection]);

  return (
    <aside className={scss.aside_item}>
      <div className={index}>
        <div className={scss.aside__scroll_before}></div>
      </div>
      <div className={scss.aside_inner}>{aside__links}</div>
    </aside>
  );
};

export default Aside;
