import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ContactUs from "@/components/contactUs/ContactUs";
import ServicesAndProcess from "@/components/servicesAndProcess/ServicesAndProcess";
import ReusableMainContent from "@/components/webMain/WebMain";
import { mvpMain } from "@/constants/reusableMain";

const MvpDevPage = () => {
  return (
    <>
      <Header />
      <ReusableMainContent data={mvpMain} />
      <ServicesAndProcess/>
      <ServicesAndProcess variant={"process"}/>
      <ServicesAndProcess/>
      <ContactUs/>
      <Footer />
    </>
  );
};

export default MvpDevPage;
