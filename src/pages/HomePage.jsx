import ItProjects from "@/components/itProjects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("welcome")}</h1>
      <MainContent>
        <ItProjects />
      </MainContent>
    </>
  );
};

export default HomePage;
