import React, { useState } from "react";
import scss from "./ProjectsItem.module.scss";
import Button from "../../Button/Button";
import Image from "next/image";
import arrow from "../../../../public/assets/images/ourProject/arrow.svg";
import { useTranslation } from "react-i18next";
import imgSLider from "../../../../public/assets/images/ourProject/mac.png";

const ProjectsItem = ({ title, subtitle, links }) => {
  const [isActive, setActive] = useState(false);

  const { t } = useTranslation();

  return (
    <div className={scss.projects__item} id="project">
      <div className={scss.item__info} id="project">
        <div className={scss.item__title}>
          <h1>{t(title)}</h1>
        </div>
        <div className={scss.item__subtitle}>
          <p>{t(subtitle)}</p>
        </div>
        <div className={scss.item__links}>
          {links.map((link, i) => (
            <>
              <div
                key={`${link}_${i}`}
                className={scss.links__item}
                id="project"
              >
                <Image src={arrow} width={8} height={14} />
                <p>{t(link)}</p>
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
      <div className={scss.item__info_adaptive} id="project">
        <div
          onClick={() => setActive(!isActive)}
          className={scss.wrapper__title}
        >
          <div className={scss.wrapper__title_left}>
            <div className={scss.item__title}>
              <h1>{t(subtitle)}</h1>
            </div>
            <div className={scss.item__subtitle}>
              <p>{t(title)}</p>
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
                    <p>{t(link)}</p>
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
        <Image src={imgSLider} width={388} height={230} />
      </div>
    </div>
  );
};

export default ProjectsItem;
