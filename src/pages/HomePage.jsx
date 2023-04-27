import Button from "@/components/Button/Button";
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("weclome")}</h1>
      <Button title={"dasdssadasdasdsa dsaa"} variant={"background__btn_active_blue"} withArrow={true}/>
    </>
  );
};

export default HomePage;
