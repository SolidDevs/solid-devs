import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BenefitsAndStatistics from "@/components/benefitsAndStatistics/BenefitsAndStatistics";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { chatMain } from "@/constants/reusableMain";
import { chatWeb } from "@/constants/reusebleService";

const ChatDevPage = () => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  return (
    <>
      <Header />
      <ReusableMainContent data={chatMain} />
      <ServicesAndProcess data={chatWeb} />
      <BenefitsAndStatistics />
      <BenefitsAndStatistics variant="statistic" />
      {isMobile ? (
        <div className="container">
          <Contacts />
        </div>
      ) : (
        <ContactUs />
      )}
      <Footer />
    </>
  );
};

export default ChatDevPage;
