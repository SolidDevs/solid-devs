import React from "react";
import scss from "./Contacts.module.scss";
import { useTranslation } from "react-i18next";
const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div className={scss.contact}>
      <div className={scss.contact__wrapper}>
        <div className={scss.contact__info}>
          <div className={scss.info__title}>
            <p>{t("contacts.info__title")}</p>
          </div>
          <div className={scss.info__subtitle}>
            <p>{t("contacts.info__subtitle")}</p>
          </div>
          <div className={scss.info__description}>
            <p>{t("contacts.info__description")}</p>
          </div>
        </div>
        <div className={scss.contact__form}>
          <div className={scss.form__title}>
            <p>{t("contacts.form__title")}:</p>
          </div>
          <div className={scss.form__buttons}>
            <button>+996 (707) 77-77-77</button>
            <button>privet@solid.kg</button>
          </div>
        </div>
      </div>
      <button>{t("contacts.form")}</button>
    </div>
  );
};

export default Contacts;
