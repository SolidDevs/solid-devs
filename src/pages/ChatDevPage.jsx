import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BenefitsAndStatistics from "@/components/benefitsAndStatistics/BenefitsAndStatistics";
import ContactUs from "@/components/contactUs/ContactUs";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { chatMain } from "@/constants/reusableMain";
import { chatWeb } from "@/constants/reusebleService";

const ChatDevPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={chatMain} />
      <ServicesAndProcess data={chatWeb} />
      <BenefitsAndStatistics />
      <BenefitsAndStatistics variant="statistic" />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ChatDevPage;
