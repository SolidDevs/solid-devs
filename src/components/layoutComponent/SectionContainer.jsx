import { useTranslation } from "react-i18next";
import scss from "./SectionContainer.module.scss";

const SectionContainer = ({ children, title }) => {
  const { t } = useTranslation("");
  return (
    <section className={scss.wrapper}>
      <h1 className={scss.wrapper_title}>{t(`${title}`)}</h1>
      <div className={scss.wrapper_item}>{children}</div>
    </section>
  );
};

export default SectionContainer;
