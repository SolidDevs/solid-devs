import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AboutUs from "@/components/aboutUs/AboutUs";
import ReasonsBlock from "@/components/columnsReusableComponent/ReasonsBlock";
import ContactUs from "@/components/contactUs/ContactUs";
import FeedBack from "@/components/feedBack/FeedBack";

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <ReasonsBlock />
      <div className="container">
        <FeedBack />
      </div>
      <ContactUs line={true} />
      <Footer />
    </>
  );
};
export default AboutUsPage;
