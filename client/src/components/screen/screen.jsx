import React from "react";
import classes from "./screen.module.scss";

const Screen = (props) => {
  return <div className={classes.screen}>{props.children}</div>;
};

export default Screen;
