import Aside from "../aside/Aside";
import scss from "./MainContent.module.scss";

const MainContent = ({ children }) => {
  return (
    <div className={`${scss.main__wrapper} container `}>
      <Aside /> 
      <div className={scss.main_right_item}>{children}</div>
    </div>
  );
};

export default MainContent;
