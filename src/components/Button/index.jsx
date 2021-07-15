import React from "react";
import "./button.scss";

const Button = ({ text, icon, handleClick, ...props }) => {
  const btnTxt = (
    <span className="btn__icon__text">
      {icon}
      {text}
    </span>
  );

  return (
    <button {...props} className="btn__main">
      {icon ? btnTxt : text}
    </button>
  );
};

export default Button;
