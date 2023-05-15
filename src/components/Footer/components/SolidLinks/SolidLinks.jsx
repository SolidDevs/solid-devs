import Link from "next/link";
import scss from "./SolidLinks.module.scss";
import React from "react";

const SolidLinks = () => {
  return (
    <div className={scss.links__main}>
      <Link href="/aboutUs">О нас</Link>
      <Link href="/carier">Карьера</Link>
    </div>
  );
};

export default SolidLinks;
