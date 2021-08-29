import React, { Component, component } from "react";
import AddNumberRoot from "./component/AddNumberRoot";
import DisplayNumberRoot from "./component/DisplayNumberRoot";
import "./App.css";

class App extends Component {
  // state = { number: 0 };
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
