import scss from "./LayoutComponent.module.scss";

const LayoutComponent = ({ children, title }) => {
  return (
    <section className={scss.wrapper}>
      <h1 className={scss.wrapper_title}>{title}</h1> // текст заголовка 
      <div className={scss.wrapper_item}>{children}</div> // основной контент
    </section>
  );
};

export default LayoutComponent;
