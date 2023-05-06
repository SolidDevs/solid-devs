import React, { useMemo } from "react";
import scss from "./OurProjects.module.scss";
import { useTranslation } from "react-i18next";
import { ourProjectArr } from "@/constants/ourProjects";
import Button from "../Button/Button";
import Image from "next/image";
import arrow from "../../../public/assets/images/ourProject/arrow.svg";
const OurProjects = () => {
  const { t } = useTranslation();
  const renderProject = useMemo(
    () =>
      ourProjectArr.map((el) => (
        <div className={scss.projects__item}>
          <div className={scss.item__info}>
            <div className={scss.item__title}>
              <h1>{t(el.title)}</h1>
            </div>
            <div className={scss.item__subtitle}>
              <p>{t(el.subtitle)}</p>
            </div>
            <div className={scss.item__links}>
              {el.links.map((link) => (
                <>
                  <div className={scss.links__item}>
                    <Image src={arrow} width={8} height={14} />
                    <p>{t(link.link)}</p>
                  </div>
                </>
              ))}
            </div>
            <Button
              title={"Перейти на сайт"}
              variant={"btn__no_bg"}
              withArrow={true}
            />
          </div>
          <div className={scss.item__img}>
            <Image src={el.imgSLider} width={388} height={230}/>
          </div>
        </div>
      )),
    []
  );
  return <div className={scss.projects}>{renderProject}</div>;
};

export default OurProjects;
