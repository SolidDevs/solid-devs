import ItProjects from "@/components/It__projects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import Navbar from "@/components/navbar/Navbar";
import { navbarLinks } from "@/constants/navbar";
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("welcome")}</h1>
      <MainContent>
        <ItProjects />
        <Navbar navbarLinks={navbarLinks} />
      </MainContent>
    </>
  );
};

export default HomePage;
