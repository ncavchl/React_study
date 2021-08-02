# React_study
React Study - 이것저것

1) 노마드코더 - 영화 웹 애플리케이션 
- git - https://github.com/ncavchl/React-express_inflearn
- https://nomadcoders.co/react-fundamentals/lectures/1540


2) 생활코딩 - 리액트
https://opentutorials.org/module/4058/24666

3) 생활코딩 - Redux (상태관리)<br>
https://cody-ims.autoever.com/projects/SMARTWP/issues/SMARTWP-180?filter=addedrecently

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

- 리덕스가 좋은 이유

  - 





4) 

























