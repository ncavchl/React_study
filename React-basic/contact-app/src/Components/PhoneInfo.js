import React, { Component } from "react";

class PhoneInfo extends Component {
  handleRemove = () => {
    const { info, onRemove } = this.props;
    console.log(info.id);
    onRemove(info.id);
  };

  render() {
    const { name, phone, id } = this.props.info;

    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
    };

    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        {id}
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default PhoneInfo;
