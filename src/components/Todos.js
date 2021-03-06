import React, { Component } from "react";
import Todo from "./Todo";
import { Consumer } from "./Context";
import axios from "axios";

export default class Todos extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { todos } = value;
          return todos.map(t => <Todo todo={t} key={t._id}></Todo>);
        }}
      </Consumer>
    );
  }
}
