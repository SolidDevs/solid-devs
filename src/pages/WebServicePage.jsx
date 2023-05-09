import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import WebMain from "@/components/webMain/WebMain";
const WebServicePage = () => {
  return (
    <>
      <Header/>
      <WebMain />
      <ServicesAndProcess />
      <ServicesAndProcess variant="process" />
      <Footer />
    </>
  );
};
export default WebServicePage;
