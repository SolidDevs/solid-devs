import ItProjects from "@/components/It__projects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import Navbar from "@/components/navbar/Navbar";
import ServicesBlock from "@/components/servicesBlock/ServicesBlock";
import { navbarLinks } from "@/constants/navbar";
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
