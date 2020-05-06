import React, { useState } from "react";
import "./App.css";
import Person from "./Components/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Janko", age: 36 },
      { name: "Helena", age: 28 },
      { name: "Nikica", age: 29 },
    ],
  });

  const switchPersonsHandler = () => {
    setPersonsState({
      persons: [
        { name: "Nikica", age: 29 },
        { name: "Janko", age: 36 },
        { name: "Helena", age: 28 },
      ],
    });
  };
  return (
    <div className="App">
      <h1>Hi, there!</h1>
      <button onClick={switchPersonsHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        click={switchPersonsHandler}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: Partying :)
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
