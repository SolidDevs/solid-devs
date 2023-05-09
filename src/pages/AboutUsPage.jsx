import Footer from "@/components/Footer/Footer";
import AboutUs from "@/components/aboutUs/AboutUs";
import ReasonsBlock from "@/components/columnsReusableComponent/ReasonsBlock";
import FeedBack from "@/components/feedBack/FeedBack";

const AboutUsPage = () => {
  return (
    <>
      <AboutUs />
      <ReasonsBlock />
      <FeedBack isMain={true} />
      <Footer />
    </>
  );
};
export default AboutUsPage;
