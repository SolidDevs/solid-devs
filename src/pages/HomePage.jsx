import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ItProjects from "@/components/ItProjects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import Main from "@/components/main/Main";
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
      </MainContent>
      <Footer />
    </>
  );
};
export default HomePage;
