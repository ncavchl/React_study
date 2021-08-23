import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [funcshow, setfuncshow] = useState(true);
  const [classshow, setclassshow] = useState(true);

  return (
    <div className="container">
      <h1>Hello world</h1>
      <input
        type="button"
        value="remove func"
        onClick={function () {
          setfuncshow(false);
        }}
      ></input>
      <input
        type="button"
        value="remove class"
        onClick={function () {
          setclassshow(false);
        }}
      ></input>
      {funcshow ? <FuncComp initnumber={2}></FuncComp> : null}
      {classshow ? <ClassComp initnumber={2}></ClassComp> : null}
    </div>
  );
}
var funStyle = "color:blue";
var funcId = 0;
function FuncComp(props) {
  const [number, setNumber] = useState(234);
  const [date, setDate] = useState(new Date().toString());

  //side effect - 한번만 실행시키려면 두번째 인자로 빈배열 넘기기
  useEffect(function () {
    //등장
    console.log(
      "%cfunc => useEffect number {componentWillUnmount} " + ++funcId,
      funStyle
    );
    document.title = date;

    //clean up - 초기화할때 그 이전에 실행되던걸 취소하고 다시 실행되게 해야함
    return function () {
      console.log(
        "%cfunc => useEffect number return {componentWillUnmount} " + ++funcId,
        funStyle
      );
    };
  }, []);

  //side effect
  useEffect(
    function () {
      //등장
      console.log(
        "%cfunc => useEffect number {componentDidMount & componentDidUpdate} " +
          ++funcId,
        funStyle
      );
      document.title = date;

      //clean up - 초기화할때 그 이전에 실행되던걸 취소하고 다시 실행되게 해야함
      return function () {
        console.log(
          "%cfunc => useEffect number return {componentDidMount & componentDidUpdate} " +
            ++funcId,
          funStyle
        );
      };
    },
    [number]
  );
  useEffect(
    function () {
      //등장
      console.log(
        "%cfunc => useEffect date {componentDidMount & componentDidUpdate} " +
          ++funcId,
        funStyle
      );
      document.title = date;

      //clean up - 초기화할때 그 이전에 실행되던걸 취소하고 다시 실행되게 해야함
      return function () {
        console.log(
          "%cfunc => useEffect date return {componentDidMount & componentDidUpdate} " +
            ++funcId,
          funStyle
        );
      };
    },
    [date]
  );

  console.log("%cfunc => render " + ++funcId, funStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}

var classStyle = "color:red";
class ClassComp extends React.Component {
  state = {
    number: this.props.initnumber,
    date: new Date().toString(),
  };
  componentWillMount() {
    console.log("%cclass => componentWillMount", classStyle);
  }
  componentDidMount() {
    console.log("%cclass => componentDidMount", classStyle);
  }
  shouldComponentUpdate(nextp, nextS) {
    console.log("%cclass => shouldComponentUpdate", classStyle);
    return true;
  }
  componentWillUpdate(nextp, nextS) {
    console.log("%cclass => componentWillUpdate", classStyle);
  }
  componentDidUpdate(nextp, nextS) {
    console.log("%cclass => componentDidUpdate", classStyle);
  }
  componentWillUnmount() {
    console.log("%cclass => componentWillUnmount", classStyle);
  }

  render() {
    console.log("%ccclas => render", classStyle);
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
