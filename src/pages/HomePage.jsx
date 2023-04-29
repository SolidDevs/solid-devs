import ItProjects from "@/components/It__projects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import FeedBack from "@/components/feed__back/feedBack";
import OurTeam from "@/components/our__team/OurTeam";
import ServicesBlock from "@/components/servicesBlock/ServicesBlock";
import TechnologiesBlock from "@/components/technologiesBlock/TechnologiesBlock";
import { fedBack2 } from "@/constants/fedback2";
import { feedBackArr } from "@/constants/feedBack";
const HomePage = () => {
  return (
    <>
      <MainContent>
        <ItProjects />
        <ServicesBlock />
        <TechnologiesBlock />
        <OurTeam />
        <FeedBack feedBackArr={feedBackArr} title={"What people say"}/>
      </MainContent>
      <FeedBack feedBackArr={fedBack2} title={"More what people say"}/>
    </>
  );
};
export default HomePage;
