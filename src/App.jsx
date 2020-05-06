import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, there!</h1>
        <Person name="Janko" age="36" />
        <Person name="Helena" age="28" />
        <Person name="Nikica" age="29">My hobbies: Partying :)</Person>
      </div>
    );
  }
}

export default App;
