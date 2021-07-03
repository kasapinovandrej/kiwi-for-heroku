import React from "react";
import classes from "./layout.module.scss";

const Layout = (props) => {
  return <div className={classes.layout}>{props.children}</div>;
};

export default Layout;
