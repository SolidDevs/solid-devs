import Button from "@/components/Button/Button";
const HomePage = () => {
  return (
    <>
      <Button title={"Связаться"}/>
      <Button title={"Перейти на сайт"} withArrow={true}/>
      <Button title={"Отправить резюме"} variant={"background_non"} withArrow={true}/>
      <Button title={"Обсудим ваш проект"} variant={"background_active"} withArrow={true}/>
    </>
  );
};

export default HomePage;
