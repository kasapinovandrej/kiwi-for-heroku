import React from "react";
import classes from "./button.module.scss";

const Button = ({ data, buttonFunction, hidden }) => {
  return (
    <button
      className={`${classes.button} ${hidden && classes.hidden}`}
      onClick={buttonFunction}
    >
      <h4 className={classes[data.buttonType]}>{data.title}</h4>
      <p>{data.subtitle}</p>
    </button>
  );
};

export default Button;
