import React, { Children } from "react";
import s from "./MessageForm.module.scss";

export const MessageForm = ({ messages }) => {
  return (
    <ul className={s.message__form}>
      {messages.map((el) => (
        <li key={el.id} className={s.message}>
          {el.msg}
        </li>
      ))}
    </ul>
  );
};
// className={s.main__message}
