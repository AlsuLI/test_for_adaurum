import React from "react";
import s from "./Button.module.scss";

export const Button = ({ children, btn }) => {
  if (btn === "pink") {
    return (
      <button className={s.button__pink}>{children}</button>
    );
  }
  if (btn === "round-green") {
    return <button className={s.button__round__green}>{children}</button>;
  }
    if (btn === "plan") {
      return <button className={s.button__plan}>{children}</button>;
    }
 if (btn === "report") {
   return <button className={s.button__report}>{children}</button>;
 }
   if (btn === "white") {
     return <button className={s.button__white}>{children}</button>;
   }
};
