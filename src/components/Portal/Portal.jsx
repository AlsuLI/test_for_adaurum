import React from "react";
import s from "./Portal.module.scss"

export const Portal = ({ variant }) => {
  if (variant === "Down") {
    return (
    <div className={s.portal__active}>
      <a className={s.portal__link} href="#">
        Обратная связь о работе сервиса
      </a>
      <a className={s.portal__link} href="#">
        Сменить помощника
      </a>
    </div>
  ); 
  } else {
    return ""
  }
 
};
