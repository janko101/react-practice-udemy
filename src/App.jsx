import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "blue")};
  color: white;
  font: inherit;
  border: 1.5px solid blue;
  box-shadow: ${(props) =>
    props.alt ? "0px 2px 15px red" : "0px 2px 15px blue"};
  padding: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : "lightblue")};
    color: black;
  }
`;

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

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      // buttonStyle.backgroundColor = "red";
      // buttonStyle.boxShadow = "0px 2px 15px red";
      // buttonStyle[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
    }
    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    if (this.state.persons.length === 0) {
      classes.push("italic");
    }
    return (
      <div className="App">
        <h1 className={classes.join(" ")}>Hi, there!</h1>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
