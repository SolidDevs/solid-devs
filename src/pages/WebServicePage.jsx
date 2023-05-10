import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import WebMain from "@/components/webMain/WebMain";
const WebServicePage = () => {
  return (
    <>
      <Header />
      <WebMain />
      <ServicesAndProcess />
      <ServicesAndProcess variant="process" />
      <ContactUs />
      <Footer />
    </>
  );
};
export default WebServicePage;
