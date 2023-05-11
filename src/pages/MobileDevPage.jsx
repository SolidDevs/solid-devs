import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { mobileMain } from "@/constants/reusableMain";

const MobileDevPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={mobileMain} />
      <ServicesAndProcess />
      <ServicesAndProcess variant={"process"} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MobileDevPage;
