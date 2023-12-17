import React, { useState } from 'react'
import btn from "../../assets/Group 19.svg";
import { Portal } from '../../components/Portal/Portal';
import s from "./DropButton.module.scss"

export const DropButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button onClick={handleClick} className={s.helper__btn}>
      <img src={btn} alt="" />
      <Portal variant={isActive ? "Down" : ""} />
    </button>
  );
}
