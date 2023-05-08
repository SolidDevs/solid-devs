import { useTranslation } from "react-i18next";
import scss from "./AboutUs.module.scss";
import React, { useMemo } from "react";
import { aboutUs } from "@/constants/aboutUs";
import AboutCard from "./aboutCard/AboutCard";

const AboutUs = () => {
  const { t } = useTranslation();
  const aboutRender = useMemo(
    () =>
      aboutUs.map((item, index) => (
        <AboutCard key={`${item.title}_${index}`} {...item} />
      )),
    []
  );
  return (
    <>
      <div className="container">
        <div className={scss.about_us__description}>
          <div className={scss.left__content}>
            <h2>О нас</h2>
            <p>
              В отличие от большинства других фирм, мы в первую очередь
              учитываем потребности бизнеса, заставляя передовые технологии
              работать на цели вашей компании.
            </p>
            <p>
              Мы отлично разбираемся в веб- и нативной мобильной разработке.
              Хорошая, эффективная архитектура — это главное. Ваш продукт должен
              быть масштабируемым, ремонтопригодным и ориентированным на
              будущее, и мы сделаем это возможным.
            </p>
            <p>
              Одной из наших основных ценностей является дизайн. Как поклонники
              всего простого, мы создаем четкие, понятные пользовательские
              интерфейсы даже для самых сложных рабочих процессов. версии вашего
              продукта. Вместо того, чтобы делать предположения и выделять
              огромные бюджеты заранее, мы должны быстро создать для вас MVP,
              вывести его на рынок, собрать отзывы и быстро повторить!
            </p>
          </div>
          <div className={scss.right__content}>{aboutRender}</div>
        </div>
      </div>
      <div className={scss.about__line}></div>
    </>
  );
};

export default AboutUs;
