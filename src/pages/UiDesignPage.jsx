import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { uiMain } from "@/constants/reusableMain";

const UiDesignPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={uiMain} />
      <ServicesAndProcess />
      <ServicesAndProcess variant={"process"} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default UiDesignPage;
