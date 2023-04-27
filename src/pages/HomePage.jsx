import ItProjects from "@/components/It__projects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import ServicesBlock from "@/components/servicesBlock/ServicesBlock";
const HomePage = () => {
  return (
    <>
      <MainContent>
        <ItProjects />
        <ServicesBlock />
      </MainContent>
    </>
  );
};

export default HomePage;
