import React from "react";
import s from "./Header.module.scss";
import Pchicken from "../../assets/Pchicken.svg"

export const Header = () => {
  return (
    <header className={s.header__wrapper}>
      <img src={Pchicken} alt="" />
      <div className={s.header__icons__wrapper}>
        <div className={s.header__flex}>
          <div className={s.header__procent}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group">
                <path
                  id="Line"
                  d="M12 5.56H22"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M15.65 10.5H14.22C12.44 10.5 12 10.06 12 8.3V4.2C12 2.44 12.44 2 14.22 2H19.78C21.56 2 22 2.44 22 4.2V8.31C22 10.07 21.56 10.51 19.78 10.51"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Line_2"
                  d="M2 17.06H12"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M5.5 22H4.22C2.44 22 2 21.56 2 19.8V15.7C2 13.94 2.44 13.5 4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78 22.01"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="Group_2">
                  <path
                    id="Vector_3"
                    d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
          </div>
          <p>5%</p>
        </div>
        <div className={s.header__flex}>
          <div className={s.header__procent}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/broken/user">
                <g id="user">
                  <path
                    id="Vector"
                    d="M15.02 3.01001C14.18 2.37001 13.14 2 12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
          </div>

          <p>Username@adaurum.ru</p>
        </div>

        <div className={s.header__flex}>
          <a href="#">
            <svg
              className={s.header__settings}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group">
                <path
                  id="Vector"
                  d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M6.88 20.58L7.97 21.21C8.76 21.68 9.78 21.4 10.25 20.61L10.36 20.42C11.26 18.85 12.74 18.85 13.65 20.42L13.76 20.61C14.23 21.4 15.25 21.68 16.04 21.21L17.77 20.22C18.68 19.7 18.99 18.53 18.47 17.63C17.56 16.06 18.3 14.78 20.11 14.78C21.15 14.78 22.01 13.93 22.01 12.88V11.12C22.01 10.08 21.16 9.22001 20.11 9.22001C19.1 9.22001 18.42 8.82001 18.18 8.19001C17.99 7.70001 18.07 7.06001 18.47 6.37001C18.99 5.46001 18.68 4.30001 17.77 3.78001L16.96 3.32001"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M13.64 3.58C12.74 5.15 11.26 5.15 10.35 3.58L10.24 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/broken/login">
                <g id="login">
                  <path
                    id="Vector"
                    d="M2 12H14.88"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M12.65 8.65002L16 12L12.65 15.35"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M21.5 13V15.26C21.5 19.73 19.71 21.52 15.24 21.52H15.11C11.09 21.52 9.24003 20.07 8.91003 16.53"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};
