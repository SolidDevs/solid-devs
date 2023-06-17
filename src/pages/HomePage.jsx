import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ItProjects from "@/components/ItProjects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import Contacts from "@/components/contacts/Contacts";
import FeedBack from "@/components/feedBack/FeedBack";
import Main from "@/components/main/Main";
import OurProjects from "@/components/ourProjects/OurProjects";
import OurTeam from "@/components/our__team/OurTeam";
import ServicesBlock from "@/components/servicesBlock/ServicesBlock";
import SimpleLoader from "@/components/simpleLoader/SimpleLoader";
import TechnologiesBlock from "@/components/technologiesBlock/TechnologiesBlock";
import Work from "@/components/work/Work";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <Suspense fallback={SimpleLoader}>
      <Header />
      <Main />
      <MainContent>
        <ItProjects />
        <ServicesBlock />
        <TechnologiesBlock />
        <FeedBack isMain={true} />
        <OurTeam />
        <Work />
        <OurProjects />
        <Contacts />
      </MainContent>
      <Footer />
    </Suspense>
  );
};
export default HomePage;
