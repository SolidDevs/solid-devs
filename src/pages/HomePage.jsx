import MainContent from "@/components/MainContent/MainContent";
import Technologies from "@/components/techologies.blocks/technologies";
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("welcome")}</h1>
      <MainContent>
        <Technologies />
      </MainContent>
    </>
  );
};

export default HomePage;