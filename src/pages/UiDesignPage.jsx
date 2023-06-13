import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { uiProcess, uiWeb } from "@/constants/reusebleService";
import scss from "./pages.module.scss";
import Navigation from "@/components/Navigation/Navigation";
import { useTranslation } from "react-i18next";
import designImage from "/public/images/reusableMain/DesignMain.svg";
import adaptiveDesign from "/public/images/adaptiveServices/uxui.svg";
import useService from "@/hooks/useService";
import { useEffect } from "react";

const UiDesignPage = () => {
  const { t } = useTranslation();
  const { services, getServices } = useService('designServices')

  useEffect(() => {
    getServices();
  }, [])

  const uiMain = {
    services: services,
    image: designImage,
    adaptiveImage: adaptiveDesign,
  };


  return (
    <>
      <Header />
      <Navigation title={t("navigation.Design_description")} />
      <ReusableMainContent data={uiMain} />
      <ServicesAndProcess data={services[0]?.services} title={t('services.designServices')} />
      <ServicesAndProcess data={services[0]?.process} variant={"process"} title={t('services.designProcess')} />
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

export default UiDesignPage;
