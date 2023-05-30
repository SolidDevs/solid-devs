import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AboutUs from "@/components/aboutUs/AboutUs";
import ReasonsBlock from "@/components/columnsReusableComponent/ReasonsBlock";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import FeedBack from "@/components/feedBack/FeedBack";

const AboutUsPage = () => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  return (
    <>
      <Header />
      <AboutUs />
      <ReasonsBlock />
      <div className="container">
        <FeedBack />
      </div>
      {isMobile ? <div className="container"><Contacts /></div> : <ContactUs line={true} />}
      <Footer />
    </>
  );
};
export default AboutUsPage;
