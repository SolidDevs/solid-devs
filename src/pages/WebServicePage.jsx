import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { webMain } from "@/constants/reusableMain";
import { webProcess, webServices } from "@/constants/reusebleService";
const WebServicePage = () => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  return (
    <>
      <Header />
      <ReusableMainContent data={webMain} />
      <ServicesAndProcess data={webServices} />
      <ServicesAndProcess variant="process" data={webProcess} />
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
export default WebServicePage;
