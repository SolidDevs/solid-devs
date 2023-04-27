import Aside from "../aside/Aside";
import scss from "./MainContent.module.scss";

const MainContent = ({ children }) => {
  return (
    <main className={`${scss.main} container`}>
      <Aside />
      <div className={scss.right_item}>
        {children}
      </div>
    </main>  
  );
};

export default MainContent;
