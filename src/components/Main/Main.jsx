import React, { useState } from "react";
import s from "./Main.module.scss";
import folder from "../../assets/Group 41.svg";
import folderAdd from "../../assets/folder-add.svg";
import { Button } from "../../ui/Button/Button";
import { DropButton } from "../../ui/DropButton/DropButton";
import { SubmitButton } from "../../ui/SubmitButton/SubmitButton";
import { MessageForm } from "../../ui/MessageForm/MessageForm";

export const Main = () => {
  // Создаем массив
  const [messages, setMessages] = useState([]);

  const addMessage = (msg) => {
    setMessages([...messages, { id: new Date().toISOString(), msg: msg }]);
  };
// принимаем value инпута
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    if (input.trim() !== "") {
      addMessage(input);
      handleSubmit(e);
      setInput("");
      handleClick();
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  //пост запрос на бэк

  // const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch("https://my-json-server.typicode.com/typicode/demo/posts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     message: input,
    //     userId: Math.random().toString(36).slice(2),
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((post) => {
    //     setPosts((posts) => [post, ...posts]);
    //     setInput("");
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  };

  // использую для смены классов

  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive();
  };

  return (
    <>
      <section className={s.main__wrapper}>
        <div div className={s.main__folder__btns}>
          <Button btn="gray">Медиапланы</Button>
          <Button btn="gray">Отчеты</Button>
        </div>
        <div className={s.main__folder__wrapper}>
          <h3>Файлы</h3>
          <div className={s.main__folder}>
            <img src={folder} alt="" />
            <p>
              Закажи у личного помощника медиаплан. Он появится в этом разделе
            </p>
          </div>
        </div>

        <div className={s.main__helper__wrapper}>
          <div className={s.main__helper__header}>
            <div className={s.main__helper__text}>
              <h3>Личный помощник</h3>
              <div>
                <p className={s.main__helper__name}>Jim Davidson</p>
                <p className={s.main__helper__mail}>Jim Davidson@adaurum.ru</p>
              </div>
            </div>
            <DropButton />
          </div>

          <div className={isActive ? s.main__chat : s.main__chat__active}>
            <MessageForm messages={messages} />
            <p className={s.main__chat__text}>
              Это чат с администратором. Ты можешь с ним пообщаться по любому
              вопросу о нашем сервисе и узнать о ходе работы
            </p>
            <div className={s.main__btn__wrapper}>
              <Button btn="plan">Заказать медиаплан</Button>
              <Button btn="report">Заказать отчет</Button>
            </div>

            <input
              type="textarea"
              placeholder="Введите сообщение для администратора"
              className={s.main__input}
              value={input}
              onChange={handleInputChange}
            />
            <input type="file" className={s.main__input__docs} />
            <label className={s.main__label__docs} for="file"></label>
            <input type="file" className={s.main__input__img} />
            <label
              className={s.main__label__img}
              accept="image/*"
              for="file"
            ></label>
            <SubmitButton handleSend={handleSend} />
          </div>
        </div>
      </section>
    </>
  );
};
