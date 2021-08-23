# React 함수형-클래스형 코딩 비교
**생활코딩 - React class vs. function style coding**

https://www.inflearn.com/course/react-class-function-%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9/dashboard





함수 스타일 에서도 

- state
- LifeCycle api 

사용 가능해짐.


### class, function 차이 
render를 직접하는 그 자체냐(function), 따로 명시하느냐
``` react.js
function FuncComp() {
  return (
    <div className="container">
      <h2>function style component</h2>
    </div>
  );
}

class ClassComp extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
      </div>
    );
  }
}
```

## state
- class - props
- function - useState

## Lifecycle API
- class - componentWillMount 이런 기본 함수
- function - useEffect / 여러개 설치 
``` react.js
//side effect
  useEffect(function () {
    console.log(
      "%cfunc => useEffect {componentDidMount & componentDidUpdate} " +
        ++funcId,
      funStyle
    );
    document.title = number + " : " + date;
  });
```

