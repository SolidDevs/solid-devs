import scss from "./SectionContainer.module.scss";

const SectionContainer = ({ children, title }) => {
  return (
    <section className={scss.wrapper}>
      <h1 className={scss.title}>{title}</h1>
      <div className={scss.__item}>{children}</div>
    </section>
  );
};

export default SectionContainer;
