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
import mvpImage from "/public/images/reusableMain/mvpMain.svg";
import adaptiveMvp from "/public/images/adaptiveServices/mvp.svg";
import { useEffect } from "react";
import Service from "@/components/ServiceMvp/Service";
import SimpleLoader from "@/components/simpleLoader/SimpleLoader";

const MvpDevPage = () => {
  const { t } = useTranslation();
  const { services, getServices, isLoading } = useService("mvpServices")

  useEffect(() => {
    getServices();
  }, [])

  const mvpMain = {
    services,
    image: mvpImage,
    adaptiveImage: adaptiveMvp,
  };

  if (isLoading) return <SimpleLoader />
  return (
    <>
      <Header />
      <Navigation title={t("navigation.MVP_description")} />
      <ReusableMainContent data={mvpMain} />
      <ServicesAndProcess data={services[0]?.services} title={t("services.mvpService")} />
      <ServicesAndProcess variant={"process"} data={services[0]?.process} title={t("services.mvpProcess")} />
      <Service data={services[0]?.reasons} title={t("services.mvpReason")} />
      <div className={scss.dekstop}>
        <ContactUs line={true} />
      </div>
      <div className={scss.adaptive}>
        <div className="container">
          <Contacts />
        </div>
      </div>
      <Footer />
    </ >
  );
};

export default MvpDevPage;
