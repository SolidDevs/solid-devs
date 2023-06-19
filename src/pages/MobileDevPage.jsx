import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import scss from "./pages.module.scss";
import Navigation from "@/components/Navigation/Navigation";
import { useTranslation } from "react-i18next";
import useService from "@/hooks/useService";
import mobileImage from "/public/images/reusableMain/mobileMain.svg";
import adaptiveMobile from "/public/images/adaptiveServices/mobiledev.svg";
import { useEffect } from "react";
import SimpleLoader from "@/components/simpleLoader/SimpleLoader";

const MobileDevPage = () => {
  const { t } = useTranslation();
  const { services, getServices, isLoading } = useService("mobileServices")

  useEffect(() => {
    getServices();
  }, [])

  const mobileMain = {
    services,
    image: mobileImage,
    adaptiveImage: adaptiveMobile,
  };

  if (isLoading) return <SimpleLoader />
  return (
    <>
      <Header />
      <Navigation title={t("navigation.Mobile_description")} />
      <ReusableMainContent data={mobileMain} />
      <ServicesAndProcess data={services[0]?.services} title={t("services.mobileServices")} />
      <ServicesAndProcess variant={"process"} data={services[0]?.process} title={t("services.mobileProcess")} />
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

export default MobileDevPage;
