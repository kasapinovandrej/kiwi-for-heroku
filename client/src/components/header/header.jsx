import React, { useState, useEffect } from "react";
import classes from "./header.module.scss";
import { RiWifiLine, RiBattery2Fill } from "react-icons/ri";
import { FaSignal } from "react-icons/fa";

const Header = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const hour = String(time.getHours()).padStart(2, 0);
  const min = String(time.getMinutes()).padStart(2, 0);
  return (
    <header className={classes.header}>
      <span>{`${hour} : ${min}`}</span>
      <div>
        <RiWifiLine />
        <FaSignal />
        <span>100%</span>
        <RiBattery2Fill />
      </div>
    </header>
  );
};

export default Header;
