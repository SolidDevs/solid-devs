import ItProjects from "@/components/It__projects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import OurTeam from "@/components/our__team/OurTeam";
import ServicesBlock from "@/components/servicesBlock/ServicesBlock";
import FeedBack from "@/components/feed__back/FeedBack";
const HomePage = () => {
  return (
    <>
      <MainContent>
        <ItProjects />
        <ServicesBlock />
        <OurTeam />
        <FeedBack />
      </MainContent>
    </>
  );
};
export default HomePage;
