import React from "react";
import scss from "./Paging.module.scss";

const Paging = ({ onClick, isActive }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={isActive ? scss.paging__item_active : scss.paging__item}
    />
  )
};


export default Paging