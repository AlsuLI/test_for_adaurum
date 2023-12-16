import React from "react";
import s from "./Footer.module.scss";
import iconGrey from "../../assets/iconGrey.svg";
import mail from "../../assets/mail.svg";
import lang from "../../assets/lang.svg";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";

export const Footer = () => {
  return (
    <footer className={s.footer__wrapper}>
      <img src={iconGrey} alt="" />
      <p>Политика конфиденциальности</p>
      <div className={s.footer__reverse}>
        <div className={s.footer__mail__wrapper}>
          <img src={mail} alt="" />
          <p>pinkchicken@adaurum.ru</p>
        </div>
        <div className={s.footer__lang__wrapper}>
          <img src={lang} alt="" />
          <a href="#">RU</a>
          <a href="#">EN</a>
          <a href="#">TUR</a>
        </div>
        <div className={s.footer__icons__wrapper}>
          <a href="https://telegram.me">
            <img src={telegram} alt="" />
          </a>
          <a href="https://api.whatsapp.com" className={s.footer__wa}>
            <img src={whatsapp} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};
