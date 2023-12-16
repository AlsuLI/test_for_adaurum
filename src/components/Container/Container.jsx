import React from 'react'
import s from "./Container.module.scss"

export const Container = ({ children, color }) => {

  if (color === "gray") {
    return (
      <div className={s.container__gray}> { children }</div >)
}
else {
  return (
    <div className={s.container}>{children }</div>
  )
}
}
