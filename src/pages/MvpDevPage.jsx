import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { mvpMain } from "@/constants/reusableMain";
import { mvpBlock, mvpProcess, mvpWeb } from "@/constants/reusebleService";
import scss from "./pages.module.scss";
const MvpDevPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={mvpMain} />
      <ServicesAndProcess data={mvpWeb} />
      <ServicesAndProcess variant={"process"} data={mvpProcess} />
      <ServicesAndProcess data={mvpBlock} />
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

export default MvpDevPage;
