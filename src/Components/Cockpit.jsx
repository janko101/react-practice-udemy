import React from "react";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  let assignClasses = [];
  let btnClass = [classes.Button];

  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  if (props.persons.length <= 2) {
    assignClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignClasses.push(classes.bold);
  }
  if (props.persons.length === 0) {
    assignClasses.push(classes.italic);
  }

  return (
    <div>
      <h1 className={assignClasses.join(" ")}>Hi, there!</h1>
      <button className={btnClass.join(" ")} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
