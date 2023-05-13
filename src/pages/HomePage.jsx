import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ItProjects from "@/components/ItProjects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import ContactUs from "@/components/contactUs/ContactUs";
import Contacts from "@/components/contacts/Contacts";
import FeedBack from "@/components/feedBack/FeedBack";
import Main from "@/components/main/Main";
import OurProjects from "@/components/ourProjects/OurProjects";
import OurTeam from "@/components/our__team/OurTeam";
import ServicesBlock from "@/components/servicesBlock/ServicesBlock";
import TechnologiesBlock from "@/components/technologiesBlock/TechnologiesBlock";
import useService from "@/hooks/useService";
import { useEffect } from "react";
const HomePage = () => {
  const { services, getServices } = useService('webService')
  useEffect(() => {
    getServices()
  }, [])
  console.log(services)
  return (
    <>
      <Header />
      <Main />
      <MainContent>
        <ItProjects />
        <ServicesBlock />
        <TechnologiesBlock />
        <OurTeam />
        <FeedBack isMain={true} />
        <OurProjects />
        <Contacts />
      </MainContent>
      <ContactUs />
      <Footer />
    </>
  );
};
export default HomePage;
