import React from "react";
import classes from "./Person.module.css";

const Person = (props) => {
  const random = Math.random();

  if (random > 0.7) {
    throw new Error( "Upss! Something is wrong!" );
  }

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
