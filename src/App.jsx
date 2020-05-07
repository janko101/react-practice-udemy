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
    showPersons: false
  };

  switchPersonsHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
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
  };

  togglePersonsHandler = () => {
    const displayPersons = this.state.showPersons
    this.setState({ showPersons: !displayPersons})
  }

  render() {
    const buttonStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1.5px solid blue",
      boxShadow: "0px 2px 15px blue",
      padding: '16px',
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Hi, there!</h1>
        <button
          style={buttonStyle}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchPersonsHandler.bind(this, "Nikita")}
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
