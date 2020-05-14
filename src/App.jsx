import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "./Components/Person";
import ErrorBoundary from "./Components/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Janko", age: 36 },
      { id: 2, name: "Helena", age: 28 },
      { id: 3, name: "Nikica", age: 29 },
    ],
    showPersons: false,
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const displayPersons = this.state.showPersons;
    this.setState({ showPersons: !displayPersons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={this.deletePersonHandler.bind(this, index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.changeNameHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass.push(classes.Red);
    }
    let assignClasses = [];

    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold);
    }
    if (this.state.persons.length === 0) {
      assignClasses.push(classes.italic);
    }
    return (
      <div className={classes.App}>
        <h1 className={assignClasses.join(" ")}>Hi, there!</h1>
        <button
          className={btnClass.join(" ")}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
