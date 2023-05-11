import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BenefitsAndStatistics from "@/components/benefitsAndStatistics/BenefitsAndStatistics";
import ContactUs from "@/components/contactUs/ContactUs";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { webMain } from "@/constants/reusableMain";
const WebServicePage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={webMain}/>
      <ServicesAndProcess />
      <ServicesAndProcess variant="process" />
      <BenefitsAndStatistics />
      <BenefitsAndStatistics variant="process" />
      <ContactUs />
      <Footer />
    </>
  );
};
export default WebServicePage;
