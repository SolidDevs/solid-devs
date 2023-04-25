import MainContent from "@/components/MainContent/MainContent";
import ServicesBlock from "@/components/servicesBlock/ServicesBlock";
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("welcome")}</h1>
      <MainContent>
        <ServicesBlock />
      </MainContent>
    </>
  );
};

export default HomePage;