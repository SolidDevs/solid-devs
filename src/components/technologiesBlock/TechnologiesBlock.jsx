import { technologiesLinks } from "@/constants/navbar";
import SectionContainer from "../layoutComponent/SectionContainer";
import Navbar from "../navbar/Navbar";
import scss from "./Technologies.module.scss";
import { useTranslation } from "react-i18next";
import { technologiesInfo } from "@/constants/technologies";
import { useCallback, useMemo, useState } from "react";
import Image from "next/image";

const TechnologiesBlock = () => {
  const { t } = useTranslation("");
  const [isOpen, setOpen] = useState(false);
  const technologiesItems = useMemo(
    () =>
      technologiesInfo.map((item, index) => (
        <div className={scss.technologies__item} key={`${item}_${index}`}>
          <div
            className={scss.item__dekstop}
            id="technologies"
          >
            <div className={scss.icon}>
              <Image
                src={`${item.img}`}
                alt={item.title}
                width={30}
                height={30}
              />
            </div>
            <p className={scss.title}>{t(item.title)}</p>
          </div>
          <div
            className={scss.item__adaptive}
            id="technologies"
          >
            <div className={scss.icon}>
              <Image
                src={`${item.img}`}
                alt={item.title}
                width={30}
                height={30}
              />
            </div>
            <div className={scss.technologies__line}></div>
            <p className={scss.title}>{t(item.title)}</p>
          </div>
        </div>
      )),
    [t]
  );
  const handleOpen = useCallback(() => {
    setOpen(!isOpen);
  });
  return (
    <SectionContainer title={t("technologies.title")} id="technologies">
      <Navbar
        clickable={true}
        navbarLinks={technologiesLinks}
        paramName={"technologies"}
        handleOpen={handleOpen}
      >
        {isOpen && technologiesItems}
      </Navbar>
      <div className={scss.technologies__dekstop} id="technologies">
        {technologiesItems}
      </div>
    </SectionContainer>
  );
};

export default TechnologiesBlock;
