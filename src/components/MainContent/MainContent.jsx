import Aside from "../aside/Aside";
import scss from "./MainContent.module.scss";

const MainContent = ({ children }) => {
  return (
    <div className={`${scss.main_wrapper} container `}>
      <Aside />
      <div className={scss.main_right_item}>{children}</div>
    </div>
  );
};

export default MainContent;
