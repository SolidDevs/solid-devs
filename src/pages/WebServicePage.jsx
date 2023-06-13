import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { webProcess, webServices } from "@/constants/reusebleService";
import scss from "./pages.module.scss";
import useService from "@/hooks/useService";
import { useEffect, useMemo, useState } from "react";
import webImage from "/public/images/reusableMain/webServiceMain.svg";
import adaptiveWeb from "/public/images/adaptiveServices/webdev.svg";
import { useTranslation } from "react-i18next";

const WebServicePage = () => {
  const { services, getServices } = useService('webServices')
  const { t } = useTranslation();

  useEffect(() => {
    getServices();
  }, [])

  const webMain = {
    services: services,
    image: webImage,
    adaptiveImage: adaptiveWeb,
  };

  return (
    <>
      <Header />
      <ReusableMainContent data={webMain} />
      <ServicesAndProcess data={services[0]?.services} title={t('services.webServices')} />
      <ServicesAndProcess variant="process" data={services[0]?.process} title={t('services.webProcess')} />
      <div className={scss.dekstop}>
        <ContactUs line={true} />
      </div>
      <div className={scss.adaptive}>
        <div className="container">
          <Contacts />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default WebServicePage;
