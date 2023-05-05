import Footer from "@/components/Footer/Footer";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import WebMain from "@/components/webMain/WebMain";
const WebServicePage = () => {
  return (
    <>
      <WebMain />
      <ServicesAndProcess />
      <ServicesAndProcess variant="process" />
      <Footer />
    </>
  );
};
export default WebServicePage;
