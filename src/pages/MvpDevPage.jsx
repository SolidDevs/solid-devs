import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { mvpMain } from "@/constants/reusableMain";
import { mvpBlock, mvpProcess, mvpWeb } from "@/constants/reusebleService";

const MvpDevPage = () => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  return (
    <>
      <Header />
      <ReusableMainContent data={mvpMain} />
      <ServicesAndProcess data={mvpWeb} />
      <ServicesAndProcess variant={"process"} data={mvpProcess} />
      <ServicesAndProcess data={mvpBlock} />
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

export default MvpDevPage;
