import React, { Component } from "react";
import PhoneForm from "./PhoneForm";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  render() {
    const { data } = this.props;
    const list = data.map((info) => <PhoneInfo info={info} key={info.id} />);
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
