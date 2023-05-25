import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { webMain } from "@/constants/reusableMain";
import { webProcess, webServices } from "@/constants/reusebleService";
const WebServicePage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={webMain} />
      <ServicesAndProcess data={webServices} />
      <ServicesAndProcess variant="process" data={webProcess} />
      <ContactUs />
      <Footer />
    </>
  );
};
export default WebServicePage;
