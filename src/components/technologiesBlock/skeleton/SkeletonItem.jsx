import React from "react";
import scss from "./skeleton.module.scss";

const SkeletonItem = () => {

  const arr = [0, 0, 0, 0, 0, 0, 0, 0]

  return (
    arr.map((el) => <section key={el} className={scss.box}>
    </section>)
  )
}


export default SkeletonItem;