import Image from "next/image";
import { useTranslation } from "react-i18next";
import scss from "./Card.module.scss";
const Сard = ({ title, subtitle, img, name, speciality, id }) => {
  const { t } = useTranslation("");
  const isColor = id % 2 === 0;
  return (
    <div className={scss.card} id="reviews">
      <div
        className={scss.card__title}
        style={{ color: isColor ? "#00b212" : "#0E61FE" }}
      >
        <p>{t(title)}</p>
      </div>
      <div className={scss.card__subtitle}>
        <p>{t(subtitle)}</p>
      </div>
      <div className={scss.card__user}>
        <Image src={img} width={50} height={50} alt={t(name)} />
        <div className={scss.user__info}>
          <h1>{t(name)}</h1>
          <p>{t(speciality)}</p>
        </div>
      </div>
    </div>
  );
};

export default Сard;
