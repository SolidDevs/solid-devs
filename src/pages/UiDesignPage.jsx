import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { uiMain } from "@/constants/reusableMain";
import { uiProcess, uiWeb } from "@/constants/reusebleService";
import scss from "./pages.module.scss";
const UiDesignPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={uiMain} />
      <ServicesAndProcess data={uiWeb} />
      <ServicesAndProcess data={uiProcess} variant={"process"} />
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

export default UiDesignPage;
