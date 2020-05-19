import React, { Component } from "react";
import classes from "./Person.module.css";
import WithClass from "../hoc/WithClass"
import PropTypes from "prop-types"

class Person extends Component {

  // componentDidMount() {
  //   this.inputElement.focus()
  // } 
  render() {
    console.log("[Person.jsx], rendering...");
    return (
      <>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={(inputEl) => this.inputElement = inputEl}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default WithClass(Person, classes.Person);
