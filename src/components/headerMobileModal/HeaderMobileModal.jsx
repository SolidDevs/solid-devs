import Image from "next/image";
import scss from "./HeaderMobileModal.module.scss";
import close from "/public/images/Header/close.svg";
import { inputs } from "@/constants/header";
import i18n from "i18next";
import { useMemo, useState } from "react";

const HeaderMobileModal = ({click}) => {
  const { t, language } = i18n;
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const handleButtonClick = () => {
    setIsContactModalOpen(!isContactModalOpen);
    click()
  };

  const [inputValues, setInputValues] = useState({
    name: "",
    number: "",
    email: "",
    company: "",
    usHelp: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };
  const sendForm = (event) => {
    setIsContactModalOpen(false);
    setInputValues({
      name: "",
      number: "",
      email: "",
      company: "",
      usHelp: "",
    });
    event.preventDefault();
  };

  const contactInputs = useMemo(
    () =>
      inputs.map(({ title, index, name, type }) => (
        <input
          className={scss.mobile__form__input}
          placeholder={t(title)}
          type={type}
          key={`${title}_${index}`}
          value={inputValues[name]}
          name={name}
          onChange={handleInputChange}
          required
        />
      )),
    [language, inputValues]
  );

  return (
    <div className={scss.wrapper}>
      <label onClick={handleButtonClick}>
        <button>{t("headerMobile.title")}</button>
      </label>
      <header
        className={
          isContactModalOpen
            ? scss.header__contactModal_active
            : scss.header__contactModal_notActive
        }
        onClick={handleButtonClick}
      >
        <section
          className={scss.header__contactModal}
          onClick={(event) => event.stopPropagation()}
        >
          <header>
            <h1>{t("header.your-project")}</h1>
            <Image
              src={close}
              width={26}
              height={26}
              onClick={handleButtonClick}
              alt="close"
            />
          </header>
          <form onSubmit={sendForm}>
            <main>{contactInputs}</main>
            <footer>
              <input
                className={scss.form__input__area}
                placeholder={t("header.us-help")}
                type="text"
                name="usHelp"
                value={inputValues["usHelp"]}
                required
                onChange={handleInputChange}
              />
              <button type="sumbit" className={scss.header__button}>
                {t("header.send")}
              </button>
            </footer>
          </form>
        </section>
      </header>
    </div>
  );
};

export default HeaderMobileModal;
