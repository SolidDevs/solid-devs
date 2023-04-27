import { useMemo } from "react";
import scss from "./Technologies.module.scss";
import { technologiesInfo } from "@/constants/technologies";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import SectionContainer from "../layoutComponent/SectionContainer";
import Navbar from "../navbar/Navbar";

const Technologies = () => {
  const { t } = useTranslation("");
  const technologiesItems = useMemo(
    () =>
      technologiesInfo.map((item, index) => (
        <div key={`${item.title}_${index}`} className={scss.__item}>
          <div className={scss.icon}>
            <Image src={`${item.img}`} alt={item.title} width={30} height={30} />
          </div>
          <p className={scss.title}>{t(item.title)}</p>
        </div>
      )),
    [technologiesInfo]
  );
  return (
    <SectionContainer title={t("technologies.title")}>
      <Navbar />
      <div className={scss.technologies}>{technologiesItems}</div>
    </SectionContainer>
  );
};

export default Technologies;
