import React from "react"
import { IButtonProps } from "../../types/type"
import "./button.scss"

const Button: React.FC<IButtonProps> = ({
  text,
  icon,
  handleClick,
  ...props
}) => {
  const btnTxt = (
    <span className="btn__icon__text">
      {icon}
      {text}
    </span>
  )

  return (
    <button {...props} className="btn__main">
      {icon ? btnTxt : text}
    </button>
  )
}

export default Button
