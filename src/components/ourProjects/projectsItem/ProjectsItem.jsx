import React from "react";
import scss from "./ProjectsItem.module.scss";
import Image from "next/image";
import imgSLider from "../../../../public/assets/images/ourProject/MacBook.svg";

const ProjectsItem = () => {


  return (
    <div className={scss.projects__item} id="ourProject">
      <div className={scss.item__img}>
        <Image src={imgSLider} width={388} height={230} />
      </div>
    </div>
  );
};

export default ProjectsItem;
