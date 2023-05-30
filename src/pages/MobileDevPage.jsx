import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { mobileMain } from "@/constants/reusableMain";
import { mobileProcess, mobileWeb } from "@/constants/reusebleService";
import scss from "./pages.module.scss";
const MobileDevPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={mobileMain} />
      <ServicesAndProcess data={mobileWeb} />
      <ServicesAndProcess variant={"process"} data={mobileProcess} />
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

export default MobileDevPage;
