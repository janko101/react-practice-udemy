import React, { Component } from "react";
import Person from "./Person";

class PersonsList extends Component {

  static getDerivedStateFromProps(props, state) {
    console.log('[PersonsList], getDerived state from props')
    return state
  }

  componentShouldUpdate(nextProps, nextState) {
    console.log('[PersonsList], componentShould update')
    return true
  }
  
  render() {
    console.log("[PersonsList], rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default PersonsList;
