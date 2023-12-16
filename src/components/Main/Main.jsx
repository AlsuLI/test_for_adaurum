import React from "react";
import s from "./Main.module.scss";
import folder from "../../assets/Group 41.png";
import btn from "../../assets/Group 19.svg";

export const Main = () => {
  return (
    <>
      <section className={s.main__wrapper}>
        <div className={s.main__folder__wrapper}>
          <h3>Файлы</h3>
          <img src={folder} alt="" />
          <p>
            Закажи у личного помощника медиаплан. Он появится в этом разделе
          </p>
        </div>

        <div className={s.main__helper__wrapper}>
          <div className={s.main__helper__header}>
            <h3>Личный помощник</h3>
            <div>
              <p>Jim Davidson</p>
              <p>Jim Davidson@adaurum.ru</p>
              <button>
                <img src={btn} alt="" />
              </button>
            </div>
          </div>

          <div className={s.main__chat}>
            <button className={s.main__btn__plan}>Заказать медиаплан</button>
            <button className={s.main__btn__report}>Заказать отчет</button>
            <input type="text" className={s.main__input} />
          </div>
        </div>
      </section>
    </>
  );
};
