import React from "react";
import "./chips.scss";

const Chips = ({ text, active }) => {
  return (
    <div className={`chips__main ${active ? "active" : ""}`}>
      <p>{text}</p>
    </div>
  );
};

export default Chips;
