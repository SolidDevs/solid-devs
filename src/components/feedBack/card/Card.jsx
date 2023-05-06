import Image from "next/image";
import { useTranslation } from "react-i18next";
import scss from "./Card.module.scss";
const Сard = ({ title, subtitle, img, name, speciality }) => {
  const { t } = useTranslation("");
  return (
    <div className={scss.card}>
      <div className={scss.card__title}>
        <p>{t(title)}</p>
      </div>
      <div className={scss.card__subtitle}>
        <p>{t(subtitle)}</p>
      </div>
      <div className={scss.card__user}>
        <Image src={img} width={50} height={50} alt={t(name)} />
        <div className={scss.user__profile}>
          <h1>{t(name)}</h1>
          <p>{t(speciality)}</p>
        </div>
      </div>
    </div>
  );
};

export default Сard;
