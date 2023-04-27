import MainContent from "@/components/main/MainContent";
import Technologies from "@/components/techologies.blocks/technologies";
import ItProjects from "@/components/It__projects/ItProjects";
const HomePage = () => {
  return (
    <>
      <MainContent>
        <ItProjects />
        <Technologies />
      </MainContent>
    </>
  );
};

export default HomePage;
