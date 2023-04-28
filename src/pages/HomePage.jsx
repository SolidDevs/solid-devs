import Button from "@/components/Button/Button";
const HomePage = () => {
  return (
    <>
      <Button title={"Связаться"}/>
      <Button title={"Перейти на сайт"} withArrow={true}/>
      <Button title={"Отправить резюме"} variant={"btn__no_bg"} withArrow={true}/>
      <Button title={"Обсудим ваш проект"} variant={"btn__light_blue"} withArrow={true}/>
    </>
  );
};

export default HomePage;
