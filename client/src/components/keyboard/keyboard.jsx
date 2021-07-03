import React from "react";
import classes from "./keyboard.module.scss";
import Button from "../button/button";
import { buttonsData } from "../../data/buttons-data";

const Keyboard = ({ inputHandlers, inputNumber }) => {
  return (
    <section className={classes.keyboard}>
      <div className={classes.buttonsbox}>
        {buttonsData.map((data) => (
          <div className={classes.buttonbox} key={data.id}>
            <Button
              data={data}
              hidden={
                data.buttonType &&
                data.buttonType !== "feedback" &&
                !inputNumber.length >= 1
              }
              buttonFunction={() =>
                data.buttonType
                  ? inputHandlers[data.buttonType]()
                  : inputHandlers.input(data.value)
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Keyboard;
