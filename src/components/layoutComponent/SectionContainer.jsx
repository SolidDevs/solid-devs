import scss from "./LayoutComponent.module.scss";

const SectionContainer = ({ children, title }) => {
  return (
    <section className={scss.wrapper}>
      <h1 className={scss.wrapper_title}>{title}</h1>
      <div className={scss.wrapper_item}>{children}</div>
    </section>
  );
};

export default SectionContainer;
