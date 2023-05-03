import ItProjects from "@/components/It__projects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import OurTeam from "@/components/our__team/OurTeam";
import ServicesBlock from "@/components/servicesBlock/ServicesBlock";
import TechnologiesBlock from "@/components/technologiesBlock/TechnologiesBlock";
import Work from "@/components/work/Work";

const HomePage = () => {
  return (
    <>
      <MainContent>
        <ItProjects />
        <ServicesBlock />
        <TechnologiesBlock />
        <OurTeam />
        <Work />
      </MainContent>
    </>
  );
};
export default HomePage;
