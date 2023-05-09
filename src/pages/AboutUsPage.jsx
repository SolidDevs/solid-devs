import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AboutUs from "@/components/aboutUs/AboutUs";
import ReasonsBlock from "@/components/columnsReusableComponent/ReasonsBlock";
import FeedBack from "@/components/feedBack/FeedBack";

const AboutUsPage = () => {
  return (
    <>
      <Header/>
      <AboutUs />
      <ReasonsBlock />
      <FeedBack />
      <Footer />
    </>
  );
};
export default AboutUsPage;
