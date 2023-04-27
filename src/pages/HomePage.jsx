import ItProjects from "@/components/It__projects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import Navbar from "@/components/navbar/Navbar";
import { navbarLinks } from "@/constants/navbar";
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
