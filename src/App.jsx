import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Janko", age: 36 },
      { name: "Helena", age: 28 },
      { name: "Nikica", age: 29 },
    ],
  };

  switchPersonsHandler = (newName, newAge) => {
    this.setState({
      persons: [
        { name: newName, age: newAge },
        { name: "Janko", age: 36 },
        { name: "Helena", age: 28 },
      ],
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Janko", age: 36 },
        { name: event.target.value, age: 28 },
        { name: "Nikica", age: 29 },
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, there!</h1>
        <button onClick={() => this.switchPersonsHandler('Nikitaa')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchPersonsHandler.bind(this, 'Nikita')}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.changeNameHandler}
        >
          My hobbies: Partying :)
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
