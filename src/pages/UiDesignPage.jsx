import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { uiMain } from "@/constants/reusableMain";
import { uiProcess, uiWeb } from "@/constants/reusebleService";

const UiDesignPage = () => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  return (
    <>
      <Header />
      <ReusableMainContent data={uiMain} />
      <ServicesAndProcess data={uiWeb} />
      <ServicesAndProcess data={uiProcess} variant={"process"} />
      {isMobile ? (
        <div className="container">
          <Contacts />
        </div>
      ) : (
        <ContactUs line={true} />
      )}
      <Footer />
    </>
  );
};

export default UiDesignPage;
