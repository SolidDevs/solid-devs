import { useTranslation } from "react-i18next";
import scss from "./Card.module.scss";
const Сard = ({ companyName, description, image, name, speciality, index }) => {
  const { t } = useTranslation("");
  return (
    <div className={scss.card} id="feedback">
      <div
        className={index % 2 === 1 ? scss.card__title_green : scss.card__title_blue}
      >
        <p>{companyName}</p>
      </div>
      <div className={scss.card__subtitle}>
        <p>{description}</p>
      </div>
      <div className={scss.card__user}>
        <img src={image} width={58} height={58} alt={t(name)} />
        <div className={scss.user__info}>
          <h1>{name}</h1>
          <p>{speciality}</p>
        </div>
      </div>
    </div>
  );
};

export default Сard;
