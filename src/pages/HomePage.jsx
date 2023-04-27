import Button from "@/components/Button/Button";
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("weclome")}</h1>
      <Button title={"Связаться"}/>
      <Button title={"Перейти на сайт"} withArrow={true}/>
      <Button title={"Отправить резюме"} variant={"background_non"} withArrow={true}/>
      <Button title={"Обсудим ваш проект"} variant={"background_active"} withArrow={true}/>
    </>
  );
};

export default HomePage;
