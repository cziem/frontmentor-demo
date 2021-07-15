import React from "react";
import "./chips.scss";

const Chips = ({ text, active, handleClick }) => {
  return (
    <div
      className={`chips__main ${active ? "active" : ""}`}
      onClick={() => handleClick(text)}
    >
      <p>{text}</p>
    </div>
  );
};

export default Chips;
