import React from 'react'
import s from "./SubmitButton.module.scss"

export const SubmitButton = ({handleSend}) => {
  return (
    <>
      <input
        onClick={handleSend}
        type="submit"
        className={s.input__submit}
      />
      <label for="submit" className={s.label__submit}>
        <span> Enter</span>
      </label>
    </>
  );
}
