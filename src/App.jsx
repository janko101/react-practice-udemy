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
    showPersons: false,
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
    const displayPersons = this.state.showPersons;
    this.setState({ showPersons: !displayPersons });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1.5px solid blue",
      boxShadow: "0px 2px 15px blue",
      padding: "16px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, there!</h1>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
