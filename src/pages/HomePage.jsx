import MainContent from "@/components/main/MainContent";
import Navbar from "@/components/navbar/Navbar";
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("welcome")}</h1>
      <MainContent >
        <Navbar />
      </MainContent>
    </>
  );
};

export default HomePage;