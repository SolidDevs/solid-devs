import React, { useState } from "react";
import scss from "./ProjectsItem.module.scss";
import Button from "../../Button/Button";
import Image from "next/image";
import arrow from "../../../../public/assets/images/ourProject/arrow.svg";
import Link from "next/link";

const ProjectsItem = ({ companyName, companyDesc, tasks, image, link }) => {
  const [isActive, setActive] = useState(false);

  return (
    <div className={scss.projects__item} id="ourProject">
      <div className={scss.item__info} id="ourProject">
        <div className={scss.item__title}>
          <h1>{companyName}</h1>
        </div>
        <div className={scss.item__subtitle}>
          <p>{companyDesc}</p>
        </div>
        <div className={scss.item__links}>
          {tasks.map((link, i) => (
            <>
              <div
                key={`${link}_${i}`}
                className={scss.links__item}
                id="ourProject"
              >
                <Image src={arrow} width={8} height={14} />
                <p>{link}</p>
              </div>
            </>
          ))}
        </div>
        <Link href={link} target="_blank">
          <Button
            title={"button__reusable.site"}
            variant={"btn__no_bg"}
            withArrow={true}
          />
        </Link>
      </div>
      <div className={scss.item__info_adaptive} id="ourProject">
        <div
          onClick={() => setActive(!isActive)}
          className={scss.wrapper__title}
        >
          <div className={scss.wrapper__title_left}>
            <div className={scss.item__title}>
              <h1>{companyDesc}</h1>
            </div>
            <div className={scss.item__subtitle}>
              <p>{companyName}</p>
            </div>
          </div>
          <div
            className={
              isActive
                ? scss.wrapper__title_right_active
                : scss.wrapper__title_right
            }
          >
            <Image width={8} height={14} src={arrow} />
          </div>
        </div>
        {isActive ? (
          <div className={scss.item__link_show}>
            <div className={scss.item__links}>
              {links.map((link, i) => (
                <>
                  <div key={`${link}_${i}`} className={scss.links__item}>
                    <Image src={arrow} width={8} height={14} />
                    <p>{link}</p>
                  </div>
                </>
              ))}
            </div>
            <Button
              title={"button__reusable.site"}
              variant={"btn__no_bg"}
              withArrow={true}
            />
          </div>
        ) : (
          <div className={scss.item__links_hide}></div>
        )}
      </div>
      <div className={scss.item__img}>
        <img src={image} width={388} height={230} />
      </div>
    </div>
  );
};

export default ProjectsItem;
