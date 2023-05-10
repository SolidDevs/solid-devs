import React, { useMemo } from "react";
import scss from "./ContactsUs.module.scss";
import Button from "../Button/Button";
import { contactUsCardArr } from "@/constants/contactUs";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const ContactUs = () => {
  const { t } = useTranslation();
  const renderCards = useMemo(
    () =>
      contactUsCardArr.map((el, index) => (
        <div className={scss.contactUs__card} key={`${el.title}_${index}`}>
          <div className={scss.card__wrapper}>
            <div className={scss.card__img}>
              <Image src={el.avatar} width={59} height={59} alt={el.title} />
            </div>
            <div className={scss.card__line}></div>
            <div className={scss.card__title}>
              <p>{t(el.title)}</p>
            </div>
          </div>
        </div>
      )),
    []
  );
  return (
    <div className={scss.contactUs}>
      <div className={scss.contactUs__line}></div>
      <div className="container">
        <div className={scss.contactUs__wrapper}>
          <div className={scss.contactUs__info}>
            <div className={scss.info__title}>
              <p>{t("contactUs.title")}</p>
            </div>
            <div className={scss.info__subtitle}>
              <p>{t("contactUs.subtitle")}</p>
            </div>
            <div className={scss.info__btns}>
              <div className={scss.btns__project}>
                <Button
                  title={"button__reusable.project"}
                  variant={"btn__light_blue"}
                />
              </div>
              <div className={scss.btns__mail}>
                <Button
                  title={"button__reusable.mail"}
                  variant={"btn__no_bg"}
                />
              </div>
            </div>
          </div>
          <div className={scss.contactUs__cards}>{renderCards}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
