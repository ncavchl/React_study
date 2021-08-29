# React_study
React Study - 이것저것

#### 1) 노마드코더 - 영화 웹 애플리케이션  https://nomadcoders.co/react-fundamentals/lectures/1540  // https://github.com/ncavchl/React-express_inflearn
#### 2) 생활코딩 - 리액트 https://opentutorials.org/module/4058/24666
#### 3) 생활코딩 - Redux (상태관리) https://opentutorials.org/module/4078
#### 4) 기술블로그 - Redux-saga (상태관리 + middleware) https://uzihoon.com/post/181be130-63a7-11ea-a51b-d348fee141c4
#### 5) 기본 개념 - 인프런 강의 https://www.inflearn.com/course/react-velopert/dashboard
#### 6) 함수형 개발방식 - 인프런 강의 https://www.inflearn.com/course/react-class-function-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9#curriculum
#### 7) 심화 게임 개발 - 인프런 강의 https://www.inflearn.com/course/web-game-react#curriculum
#### 8) 리액트 스타일 가이드 필기 - 도서  http://www.yes24.com/Product/Goods/72264715

<br>
#### +) 아토믹 디자인 방법론 https://ui.toast.com/weekly-pick/ko_20200213


<br><Br>


1) 노마드코더 - 영화 웹 애플리케이션 
- git - https://github.com/ncavchl/React-express_inflearn
- https://nomadcoders.co/react-fundamentals/lectures/1540


<br><br>

2) 생활코딩 - 리액트
https://opentutorials.org/module/4058/24666

<br><br>

3) 생활코딩 - Redux (상태관리)<br>
  https://opentutorials.org/module/4078

- UNDO  REDO 쉽게 할 수 있음 - 원본을 복제한 데이터로 활용 / 상태변화가 서로에게 영향주지 않음 / 독립됨

- 이전 상태 기록 저장 

- store 생성

  - state 직접 접속 불가 

  - reducer 라는 함수로 공급

  - dispatch / subscribe / getState 함수

  - store 바깥 ) render 

    - store 의 state가 바뀔때마다 렌더링이 된다면?  subscribe 함수에 등록

      ```react
      store.subscribe(render);
      ```

    - action 이 일어남 -> dispatch 에게 전달됨 

      1) reduce를 호출하여 state 변경 (2개 값 전달 : 현재 state, 액션데이터 객체 전달) - 새로운 state를 리턴 // 가공자

      2) subscribe를 이용해 render 호출 , 화면변경)

- **리덕스가 좋은 이유**

  - (중앙집중적인 데이터 관리) 중앙에서 상태관리를 할 수 있으므로, 상태관리에 대한 로직이 줄어듬 / 
    - 2개의 로직 - 상태 바꼈을때 알려줄 수 있는 로직, 상태변화에 따라 자기 자신을 변경시키는 로직
  - 상태 버전 관리 - 기록 저장, time traveling 



- CRUD
  - 부품화
  - store & state
  - dispatch, action
  - subscribe
  - 글생성 구현
  - 글 삭제 구현

<img src="https://github.com/ncavchl/React_study/blob/main/Redux/redux%20loadmap.png?raw=true" alt="" title="">

<br><br>

4)  생활코딩 - React Redux<br>
https://opentutorials.org/module/4518

- Redux 미 도입시

- ```react
  // 상위로 보내줌
  export default class AddNumber extends Component {
    state = { size: 5 };
    render() {
      return (
        <div>
          <h1>Display Number </h1>
          <input
            type="button"
            value="+"
            onClick={function () {
              this.props.onClick(this.state.size); // 여기서 위 컴포넌트로 보냄
            }.bind(this)}
          ></input>
          <input
            type="text"
            value={this.state.size}
            onChange={function (e) {
              this.setState({ size: Number(e.target.value) });
            }.bind(this)}
          ></input>
        </div>
      );
    }
  }
  ```

  


- ```react
  //AddNumber 에서 온 size 값을 받고, App 상위로 보냄 
  export default class AddNumberRoot extends Component {
    render() {
      return (
        <div>
          <h1>Add Number Root</h1>
          <AddNumber
            onClick={function (size) {
              this.props.onClick(size); //here
            }.bind(this)}
          ></AddNumber>
        </div>
      );
    }
  }
  
  ```

- ```react
  // 받아서 처리 
  class App extends Component {
    state = { number: 0 };
    render() {
      return (
        <div className="App">
          <h1>Root</h1>
          <AddNumberRoot
            onClick={function (size) {
              this.setState({ number: this.state.number + size }); // here
            }.bind(this)}
          ></AddNumberRoot>
          <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
        </div>
      );
    }
  }
  ```

  

  ####  Redux 종속성 제거

- presentation Component - 리덕스를 모르는 / 재사용 가능한 컴포넌트

- Container Component - store와 관련된 실질적 작업을 처리하는 컴포넌트

- store.js

  ```react
  import { createStore } from "redux";
  
  // reducer 역할
  export default createStore(function (state, action) {
    if (state === undefined) {
      return { number: 0 };
    }
    if (action.type === "INCREMENT") {
      // ... 복제한다는 뜻
      return { ...state, number: state.number + action.size };
    }
    return state;
  }, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());
  ```

- Addnumber.js - presentation component

  ```react
  import React, { Component, compconent } from "react";
  
  export default class AddNumber extends Component {
    state = { size: 5 };
    render() {
      return (
        <div>
          <h1>Display Number </h1>
          <input
            type="button"
            value="+"
            onClick={function () {
              this.props.onClick(this.state.size);
            }.bind(this)}
          ></input>
          <input
            type="text"
            value={this.state.size}
            onChange={function (e) {
              this.setState({ size: Number(e.target.value) });
            }.bind(this)}
          ></input>
        </div>
      );
    }
  }
  ```

- Addnumber.jsx - Container component

  ```react
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
  ```

- AddnumberRoot.js 

  ```react
  import React, { Component, compconent } from "react";
  import AddNumber from "../containers/AddNumber";
  
  export default class AddNumberRoot extends Component {
    render() {
      return (
        <div>
          <h1>Add Number Root</h1>
          <AddNumber></AddNumber>
        </div>
      );
    }
  }
  ```



#### React-redux

- index.js -> Provider로 감싸 한번에 store를 바라보게 함

- ```react
  import { Provider } from "react-redux";
  import store from "./store";
  
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );
  
  ```

- import { connect } from "react-redux"; 

- **connect( A , B ) (Returncomponent);** 

  - A,B 인자로 넘김

  - ```react
    function mapReduxStateToReactProps(state) {
      return {
        number: state.number,
      };
    }
    function mapReduxDispatchToReactProps() {
      return {};
    }
    
    export default connect(
      mapReduxStateToReactProps,
      mapReduxDispatchToReactProps
    )(DisplayNumber);
    ```

  - 








4) 기술블로그 - Redux-saga (상태관리 + middleware)<br>
https://uzihoon.com/post/181be130-63a7-11ea-a51b-d348fee141c4





+)
> sidebar - depth 구조 구현을 위해 recursive 구현 방식 필요
> breadcrumbs - path 경로 


### Styled components 방식이 최신 트렌드
https://styled-components.com/
makestyles - material ui 
