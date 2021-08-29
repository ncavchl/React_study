# react-style-guide
####  도서 http://www.yes24.com/Product/Goods/72264715





### 리액트 프로젝트 생성방법

```powershell
mkdir react-app
cd react-app
npm init
npm install --save react
# npm install --save-dev
# npm install -g create-react-app  -> craete-react-app my-app 

npm install
cd my-app (생성한 프로젝트로 이동)
npm start	
```



- --save : 제품과 직접적인 의존 관계에 있는 패키지, react 등 제품을 만들 때 필요한 라이브러리
- --save-dev : 개발 작업에 이용되는 패키지, babel이나 jest 등 빌드 작업이나 품질 향상을 위해 이용하는 라이브러리 
- -- global : 프로젝트 전체에 걸쳐 이용할 수 있도록 실행 환경을 설치, create-react-app등 패키지에서 제공하는 고유의 명령을 사용하고자 할 때





### Babel

설정한 js 버전으로 트랜스파일 해주는 도구 

```
npm install --save-dev @babel/cli @babel/preset-env
```





### Props - State

Props - 전달받은 값으로 컴포넌트는 이를 활용할 뿐, 변하지 않느 객체

State - 컴포넌트 자체로 가짐, 변경 가능한 객체 

- React.Component를 상속하는 클랙스에서만 사용 가능
- Stateless Functional Components - SFC
- Functional Components 에선 사용 불가 --> <b>useState Hook으로 사용 가능</b>



### Props.children

컴포넌트의 요소로 컴포넌트를 전달할 수 있다. 

```react
const ShowName = (props) => {
    return (
        <div>
            <hr/>
            {props.children}
        </div>
    )
}
```



```react
{/* First */}
<ShowName>
   <Taro></Taro>
</ShowName>

{/* Second */}
<ShowName children={<Taro></Taro>}/>
```



### Event

```react
<button onClick={alert('button click')}>
    Error - 읽어들일 때 함수가 한 번 실행됨</button>
<button onClick={this.handleClick}>Button</button>
```

함수를 실행하는 작성 방식이라면 최초 렌더링시 바로 실행됨 

-> 이벤트 핸들러가 되는 함수를 준비하여 전달해야함.



### 생명주기 life cycle

- Mount 계열
- Update 계열
- Unmount 계열

![](C:\cheon\coding\react\React_study\8.react-style-guide\react-life-cycle-2.png)

#### componentWillMount

Dom 트리에 추가되기 직전에 한번만 실행되는 메서드 

초기화 처리등에 사용

서버 사이트 렌더링 실행 시에도 호출되는 메서드





#### componentDidMount

처음에 render 실행된 직후에 실행되는 메서드

요소에 관계된 초기화 처리 등을 수행

componentWillMount와 달리 서버 사이트 렌더링 시에는 실행되지 않음
