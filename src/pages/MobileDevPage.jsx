import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { mobileMain } from "@/constants/reusableMain";
import { mobileProcess, mobileWeb } from "@/constants/reusebleService";

const MobileDevPage = () => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  return (
    <>
      <Header />
      <ReusableMainContent data={mobileMain} />
      <ServicesAndProcess data={mobileWeb} />
      <ServicesAndProcess variant={"process"} data={mobileProcess} />
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

export default MobileDevPage;
