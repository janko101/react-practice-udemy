import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../context/authContext";

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[Cockpit.jsx], UseEffect");
    toggleButtonRef.current.click();
    return () => {
      console.log("[Cockpit.jsx], cleanup work in useEffect");
    };
  }, []);

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
      <h1 className={assignClasses.join(" ")}>{props.title}</h1>
      <button
        ref={toggleButtonRef}
        className={btnClass.join(" ")}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <button className={btnClass.join(" ")} onClick={authContext.login}>
        Log in
      </button>
    </div>
  );
};

export default Cockpit;
