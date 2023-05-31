import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BenefitsAndStatistics from "@/components/benefitsAndStatistics/BenefitsAndStatistics";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { chatMain } from "@/constants/reusableMain";
import { chatWeb } from "@/constants/reusebleService";
import scss from "./pages.module.scss";
const ChatDevPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={chatMain} />
      <ServicesAndProcess data={chatWeb} />
      <BenefitsAndStatistics />
      <BenefitsAndStatistics variant="statistic" />
      <div className={scss.dekstop}>
        <ContactUs />
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

export default ChatDevPage;
