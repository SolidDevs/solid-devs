import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import BenefitsAndStatistics from "@/components/benefitsAndStatistics/BenefitsAndStatistics";
import ReusableMainContent from "@/components/webMain/WebMain";
import { chatMain } from "@/constants/reusableMain";
import { chatInformation, chatPriority, chatWeb } from "@/constants/reusebleService";

const ChatDevPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={chatMain} />
      <ServicesAndProcess data={chatWeb}/>
      <BenefitsAndStatistics data={chatPriority}/>
      <BenefitsAndStatistics variant="statistic" data={chatInformation}/>
      <ContactUs />
      <Footer />
    </>
  );
};

export default ChatDevPage;
