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

![react-life-cycle-2](https://user-images.githubusercontent.com/48319693/131239815-b286da93-ab9c-4ae7-9e37-00ff603b3fa7.png)


#### componentWillMount

Dom 트리에 추가되기 직전에 한번만 실행되는 메서드 

초기화 처리등에 사용

서버 사이트 렌더링 실행 시에도 호출되는 메서드



#### componentDidMount

처음에 render 실행된 직후에 실행되는 메서드

요소에 관계된 초기화 처리 등을 수행

componentWillMount와 달리 서버 사이트 렌더링 시에는 실행되지 않음



#### componentWillReceiveProps (리액트 v17.0부터 중단 - 못씀)

컴포넌트가 props값을 전달받았을 때 호출되는 메서드.

즉, 새로운 props에 의해 컴포넌트가 변경될 때마다 실행됨.



#### shouldComponentUpdate

특정값 변경해도 실제로 같은 값이라면 화면에 다시 표시하는 것은 쓸데없는 처리 -> 

명시적으로 변경내용을 비교할 때 사용 

update 감지



#### componentWillUpdate

props나 state의 변경으로 갱신될 때 화면 표시 직전에 실행됨



#### componentDidUpdate

props나 state에 의한 화면에 재표시되기 직전에 실행됨



#### componentWillUnmount

컴포넌트가 dom에서 삭제되지 직전ㄴ에 실행됨.



#### getDerivedStateFromProps

리액트 v17.0에서 폐지될 메서드 대체, v16.3부터 추가됨

인스턴스화된 뒤에 실행되며 인수로서 props와 state를 전달받을 수 있음



### 아토믹 디자인 Atomic Design

- page, component 2가지로 나누어 UI 파악
- 컴포넌트를 조합하여 다양한 인터페이스나 템플릿을 구축하는 방법론.
- 재사용! 효율! 일관성! 유지보수 굳!
- 분할 단위
  - Atoms 원자 - 글꼴 크기 등의 구체적인 속성,  부품으로 구체성은 없음 (ex. 버튼, 입력영역, 제목, 아이콘, 라벨, 체크박스, 라디오 버튼, 타이포그래피 등등) 
  - Molecules 분자 - atoms 조합, UI에 의미부여, <b>재사용성 유지</b> 
  - Organisms 유기체 - 재사용성 크게 요구X (ex.헤더, 푸터 등등)
  - Templates 템플릿 - 와이어 프레임과 마찬가지, 실제 데이터가 반영되기 전의 상태, 페이지 구조나 레이아웃 구성 등을 설명하기 위한 레이어
  - Pages 페이지 - templates에서 실제 데이터가 반영된 상태. (목업)



#### 디자인 시스템

추상적인 스타일 가이드라인에서 실제 사용 가능한 컴포넌트 라이브러리, 그뿐만 아니라 컴포넌트를 어떤 환경에서  사용하는지, 어떤 기초 설계나 콘텐츠 원칙에 따라야 하는지 등의 상위 개념까지 다루고 있다.



#### Fragment 

리액트 v16.2부터 지원

여러개의 요소를 직접 화면에 표시할 수 있음.

래핑을 위핸 DOM은 출력하지 않고 자식 요소만 렌더링 함.

```react
return (
	<Fragment>
		<h1>hello</h1>
		<p>world</p>
	</Fragment>
)
```





### Build

프로그램 소스 코드에 배포할 파일을 생성하거나, 관련 문서를 생성하는 공정 



### Webpack

웹 프론트엔드 소스 코드에 자동화 작업을 적용하는 도구

모듈 번들러 - 브라우저에서 사용할 javascript 파일을 번들, 다양한 리소스나 에셋을 변환/번들링/패키징할 수 있음

entry(진입) / output(출력) / entry point(진입점)



#### loader

webpack에서는 다양한 종류의 파일을 모듈로 다루기 위해 로더를 장치로 둠.



#### babel loader

transpile을 하기 위해서는 여러 플러그인이 필요한데, 이 플러그인들을 모아 설정해논 것이 preset이다.



watch 모드 - 소스코드 수정시 자동으로 다시 build




#### 컴포넌트 상태 관리
Flux - MVC에서의 model,view,controller 3자가 빙글빙글 반복하여 모두가 한 방향으로 흘러가는 구조 (설계 패턴)
