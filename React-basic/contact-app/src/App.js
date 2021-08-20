import React, { Component } from "react";
import PhoneForm from "./Components/PhoneForm";
import PhoneInfoList from "./Components/PhoneInfoList";

class App extends Component {
  id = 0;

  state = {
    information: [],
  };

  handleCraete = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++,
      }),
    });
  };
  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCraete} />

        <PhoneInfoList data={this.state.information} />
      </div>
    );
  }
}
export default App;
