import { useTranslation } from "react-i18next";
import scss from "./SectionContainer.module.scss";

const SectionContainer = ({ children, title ,id}) => {
  const { t } = useTranslation("");
  return (
    <section className={scss.wrapper} id={id}>
      <h1 className={scss.wrapper_title}>{t(`${title}`)}</h1>
      <div className={scss.wrapper_item}>{children}</div>
    </section>
  );
};

export default SectionContainer;
