import { useMemo } from "react";
import scss from "./ServicesBlock.module.scss";
import { servicesData } from "@/constants/services";
import SectionContainer from "../layoutComponent/SectionContainer";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const ServicesBlock = () => {
  const { t } = useTranslation("");
  const serviseItems = useMemo(
    () =>
      servicesData.map((item, index) => (
        <div key={`${item.title}_${index}`} className={scss.service_item}>
          <div className={scss.service_children_item}>
            <h1 className={scss.service_title}>{t(`${item.title}`)}</h1>
            <svg
              className={scss.svg_arrow}
              width="32"
              height="16"
              viewBox="0 0 32 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.7071 8.7071C32.0976 8.31658 32.0976 7.68341 31.7071 7.29289L25.3431 0.92893C24.9526 0.538406 24.3195 0.538406 23.9289 0.92893C23.5384 1.31945 23.5384 1.95262 23.9289 2.34314L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.7071ZM8.74228e-08 9L31 9L31 7L-8.74228e-08 7L8.74228e-08 9Z"
                fill="#0E61FE"
              />
            </svg>
          </div>
          <Image
            className={scss.service_circle_items}
            src="./images/servicesBlock/circle.svg"
            alt="circle"
            width={103}
            height={84}
          />
        </div>
      )),
    []
  );
  return (
    <>
      <SectionContainer title="serviceBlock.title">
        <div className={scss.servicesBlock}>{serviseItems}</div>
      </SectionContainer>
    </>
  );
};

export default ServicesBlock;
