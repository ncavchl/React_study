import AddNumber from "../component/AddNumber";
import store from "../store";
import React, { Component } from "react";
export default class extends Component {
  render() {
    return (
      <AddNumber
        onClick={function (size) {
          store.dispatch({ type: "INCREMENT", size: size });
        }}
      ></AddNumber>
    );
  }
}
