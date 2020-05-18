import React, { Component } from "react";
import Person from "./Person";

class PersonsList extends Component {

  static getDerivedStateFromProps(props, state) {
    console.log('[PersonsList.jsx], getDerived state from props')
    return state
  }

  componentShouldUpdate(nextProps, nextState) {
    console.log('[PersonsList.jsx], componentShould update')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[PersonsList.jsx], getSnapShotBeforeUpdate')
    return {message: 'Snapshot'}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[PersonsList.jsx], componentDidUpdate')
    console.log(snapshot.message)
  }

  componentWillUnmount() {
    console.log('[PersonsList], componentWillUnmount')
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
