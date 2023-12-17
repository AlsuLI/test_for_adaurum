import React, { Children } from 'react'
import s from "./MessageForm.module.scss"

export const MessageForm = ({children}) => {
  return (
    <ul className={s.message__form}>
     {children}
    </ul>
  )
}
