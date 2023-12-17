import React from "react";
import s from "./Header.module.scss";
import Pchicken from "../../assets/Pchicken.svg";
import Settings from "../../assets/Settings.svg";
import Exit from "../../assets/Exit.svg";
import { Button } from "../../ui/Button/Button";
import procent from "../../assets/procent.svg";
import user from "../../assets/user.svg";
export const Header = () => {
  return (
    <header>
      <div className={s.header__wrapper}>
        <div className={s.header__flex}>
          <img src={Pchicken} alt="" className={s.Pchicken} />
          <div className={s.header__icons__wrapper}>
            <div className={s.header__icons}>
              <a href="#" className={s.header__procent}>
                <Button btn="pink">
                  <img src={procent} alt="" />
                </Button>
              </a>
              <p>
                5% <span>выручки</span>
              </p>
            </div>
            <div className={s.header__icons}>
              <a href="#">
                <Button btn="pink">
                  <img src={user} alt="" />
                </Button>
              </a>
              <p>Username@adaurum.ru</p>
            </div>
          </div>
        </div>
        <div className={s.header__sets}>
          <a href="#" className={s.header__settings}>
            <Button btn="white">
              <img src={Settings} alt="" />
            </Button>
          </a>
          <a href="#">
            <Button btn="white">
              <img src={Exit} alt="" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};
