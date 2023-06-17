import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import scss from "./pages.module.scss";
import useService from "@/hooks/useService";
import { useEffect } from "react";
import webImage from "/public/images/reusableMain/webServiceMain.svg";
import adaptiveWeb from "/public/images/adaptiveServices/webdev.svg";
import { useTranslation } from "react-i18next";
import SimpleLoader from "@/components/simpleLoader/SimpleLoader";
import { Suspense } from "react";

const WebServicePage = () => {
  const { services, getServices, isLoading } = useService("webServices")
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
    <Suspense fallback={SimpleLoader}>
      <Header />
      <ReusableMainContent data={webMain} />
      <ServicesAndProcess data={services[0]?.services} title={t("services.webServices")} />
      <ServicesAndProcess variant="process" data={services[0]?.process} title={t("services.webProcess")} />
      <div className={scss.dekstop}>
        <ContactUs line={true} />
      </div>
      <div className={scss.adaptive}>
        <div className="container">
          <Contacts />
        </div>
      </div>
      <Footer />
    </Suspense>
  );
};
export default WebServicePage;
