import Button from "@/components/Button/Button";
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("welcome")}</h1>
      <Button title={'dasdssadasdasdsa dsaa'} withArrow={true}/>
    </>
  );
};

export default HomePage;
