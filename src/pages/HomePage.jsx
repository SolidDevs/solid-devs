import Footer from "@/components/Footer/Footer";
import ItProjects from "@/components/It__projects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import FeedBack from "@/components/feedBack/feedBack";
import Main from "@/components/main/Main";
import OurTeam from "@/components/our__team/OurTeam";
import ServicesBlock from "@/components/servicesBlock/ServicesBlock";
import TechnologiesBlock from "@/components/technologiesBlock/TechnologiesBlock";
const HomePage = () => {
  return (
    <>
      <Main />
      <MainContent>
        <ItProjects />
        <ServicesBlock />
        <TechnologiesBlock />
        <OurTeam />
        <FeedBack />
      </MainContent>
      <Footer />
    </>
  );
};
export default HomePage;
