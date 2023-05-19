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
      setIndex(scss.aside__itProject_scroll);
    } else if (href === "#service") {
      setIndex(scss.aside__service_scroll);
    } else if (href === "#technologies") {
      setIndex(scss.aside__technoligies_scroll);
    } else if (href === "#team") {
      setIndex(scss.aside__team_scroll);
    } else if (href === "#feedback") {
      setIndex(scss.aside__rewiews_scroll);
    } else if (href === "#ourProject") {
      setIndex(scss.aside__ourProject_scroll);
    }else if (href === "#work") {
      setIndex(scss.aside__work_scroll);
    }
  };

  const aside__links = asideLinks.map((item, index) => (
    <a
      key={`${item.link}_${index}`}
      className={scss.aside__links}
      href={item.path}
      onClick={() => change(item.path)}
    >
      {t(item.link)}
    </a>
  ));

  useEffect(() => {
    if (currentSection === "itProject") {
      setIndex(scss.aside__itProject_scroll);
    } else if (currentSection === "service") {
      setIndex(scss.aside__service_scroll);
    } else if (currentSection === "technologies") {
      setIndex(scss.aside__technoligies_scroll);
    } else if (currentSection === "team") {
      setIndex(scss.aside__team_scroll);
    } else if (currentSection === "feedback") {
      setIndex(scss.aside__rewiews_scroll);
    } else if (currentSection === "ourProject") {
      setIndex(scss.aside__ourProject_scroll);
    }else if (currentSection === "work") {
      setIndex(scss.aside__work_scroll);
    }
  }, [currentSection]);

  console.log(currentSection)

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
