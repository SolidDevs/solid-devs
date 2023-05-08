import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ItProjects from "@/components/It__projects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import FeedBack from "@/components/feedBack/FeedBack";
import Main from "@/components/main/Main";
import OurProjects from "@/components/ourProjects/OurProjects";
import OurTeam from "@/components/our__team/OurTeam";
import ServicesBlock from "@/components/servicesBlock/ServicesBlock";
import TechnologiesBlock from "@/components/technologiesBlock/TechnologiesBlock";
const HomePage = () => {
  return (
    <>
      <Header/>
      <Main />
      <MainContent>
        <ItProjects />
        <ServicesBlock />
        <TechnologiesBlock />
        <OurTeam />
        <FeedBack isMain={true}/>
        <OurProjects/>
      </MainContent>
      <Footer />
    </>
  );
};
export default HomePage;
