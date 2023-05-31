import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AboutUs from "@/components/aboutUs/AboutUs";
import ReasonsBlock from "@/components/columnsReusableComponent/ReasonsBlock";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import FeedBack from "@/components/feedBack/FeedBack";
import scss from "./pages.module.scss";
const AboutUsPage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <ReasonsBlock />
      <div className="container">
        <FeedBack />
      </div>
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
export default AboutUsPage;
