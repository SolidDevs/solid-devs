import { technologiesLinks } from "@/constants/navbar";
import SectionContainer from "../layoutComponent/SectionContainer";
import Navbar from "../navbar/Navbar";
import scss from "./Technologies.module.scss";
import { useTranslation } from "react-i18next";
import { technologiesInfo } from "@/constants/technologies";
import { useMemo } from "react";
import Image from "next/image";

const TechnologiesBlock = () => {
  const { t } = useTranslation("");
  const technologiesItems = useMemo(
    () =>
      technologiesInfo.map((item, index) => (
        <div key={`${item.title}_${index}`} className={scss.__item}>
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
      )),
    [t]
  );
  return (
    <SectionContainer title={t("technologies.title")}>
      <Navbar clickable={true} navbarLinks={technologiesLinks} paramName={"technologies"} />
      <div className={scss.technologies}>{technologiesItems}</div>
    </SectionContainer>
  );
};

export default TechnologiesBlock;
