import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person";

class App extends Component {
  state = {
    persons: [
      {name: 'Janko', age: 36},
      {name: 'Helena', age: 28},
      {name: 'Nikica', age: 29}
    ]
  }

  switchPersonsHandler = () => {
    this.setState( {
      persons: [
        {name: 'Nikica', age: 29},
        {name: 'Janko', age: 36},
        {name: 'Helena', age: 28}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, there!</h1>
        <button onClick={this.switchPersonsHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Partying :)</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
