import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { uiMain } from "@/constants/reusableMain";
import { uiProcess, uiWeb } from "@/constants/reusebleService";

const UiDesignPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={uiMain} />
      <ServicesAndProcess data={uiWeb} />
      <ServicesAndProcess data={uiProcess} variant={"process"} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default UiDesignPage;
