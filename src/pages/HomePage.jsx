import Button from "@/components/Button/Button";
import { useTranslation } from "react-i18next";
import ItProjects from "@/components/It__projects/ItProjects";
import MainContent from "@/components/MainContent/MainContent";
import ServicesBlock from "@/components/servicesBlock/ServicesBlock";
const HomePage = () => {
  return (
    <>
      <h1>{t("weclome")}</h1>
      <Button title={"Связаться"}/>
      <Button title={"Перейти на сайт"} withArrow={true}/>
      <Button title={"Отправить резюме"} variant={"background_non"} withArrow={true}/>
      <Button title={"Обсудим ваш проект"} variant={"background_active"} withArrow={true}/>
      <MainContent>
        <ItProjects />
        <ServicesBlock />
      </MainContent>
    </>
  );
};

export default HomePage;
