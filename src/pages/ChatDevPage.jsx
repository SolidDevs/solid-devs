import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BenefitsAndStatistics from "@/components/benefitsAndStatistics/BenefitsAndStatistics";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import scss from "./pages.module.scss";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation/Navigation";
import useService from "@/hooks/useService";
import { useEffect } from "react";
import adaptiveChat from "/public/images/adaptiveServices/services.svg";
import chatImage from "/public/images/reusableMain/chatMain.svg";
import StatisticsChat from "@/components/statisticsChat/StatisticsChat";
import SimpleLoader from "@/components/simpleLoader/SimpleLoader";
import { Suspense } from "react";

const ChatDevPage = () => {
  const { t } = useTranslation();
  const { services, getServices } = useService("chatServices")

  useEffect(() => {
    getServices();
  }, [])

  const chatMain = {
    services,
    image: chatImage,
    adaptiveImage: adaptiveChat,
  };

  return (
    <Suspense fallback={SimpleLoader}>
      <Header />
      <Navigation title={t("navigation.Chat_description")} />
      <ReusableMainContent data={chatMain} />
      <ServicesAndProcess data={services[0]?.services} title={t("services.chatService")} />
      <BenefitsAndStatistics data={services[0]?.advantage} title={t("services.chatProcess")} />
      <StatisticsChat data={services[0]?.process} title={t("services.chatStat")} />
      <div className={scss.dekstop}>
        <ContactUs />
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

export default ChatDevPage;
