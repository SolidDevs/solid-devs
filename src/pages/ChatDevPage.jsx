import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { chatMain } from "@/constants/reusableMain";

const ChatDevPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={chatMain} />
      <ServicesAndProcess />
      <ServicesAndProcess variant={"process"} />
      <ServicesAndProcess />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ChatDevPage;
