import { useMemo } from "react";
import scss from "./ServicesBlock.module.scss";
import { servicesData } from "@/constants/services";
import SectionContainer from "../layoutComponent/SectionContainer";
import ServiceCard from "./serviceCard/ServiceCard";

const ServicesBlock = () => {
  const serviseItems = useMemo(
    () =>
      servicesData.map((item, index) => (
        <ServiceCard key={`${item.title}_${index}`} {...item} />
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
