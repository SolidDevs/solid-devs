import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { webMain } from "@/constants/reusableMain";
import { webProcess, webServices } from "@/constants/reusebleService";
import scss from "./pages.module.scss";
const WebServicePage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={webMain} />
      <ServicesAndProcess data={webServices} />
      <ServicesAndProcess variant="process" data={webProcess} />
      <div className={scss.dekstop}>
        <ContactUs line={true} />
      </div>
      <div className={scss.adaptive}>
        <div className="container">
          <Contacts />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default WebServicePage;
