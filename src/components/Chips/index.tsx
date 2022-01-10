import React from "react"
import { IChipSetProps } from "../../types/type"
import "./chips.scss"

const Chips = ({ text, active, handleClick }: IChipSetProps) => {
  return (
    <div
      className={`chips__main ${active ? "active" : ""}`}
      onClick={() => handleClick && handleClick(text)}
    >
      <p>{text}</p>
    </div>
  )
}

export default Chips
