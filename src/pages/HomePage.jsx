import ItProjects from "@/components/itProjects/ItProjects";
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("welcome")}</h1>
      <ItProjects />
    </>
  );
};

export default HomePage;
