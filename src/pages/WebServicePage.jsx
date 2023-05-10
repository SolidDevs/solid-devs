import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { webMain } from "@/constants/reusableMain";
const WebServicePage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={webMain}/>
      <ServicesAndProcess />
      <ServicesAndProcess variant="process" />
      <Footer />
    </>
  );
};
export default WebServicePage;
