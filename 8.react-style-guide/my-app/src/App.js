import React, {Component} from 'react'
import Taro from './component/Taro';
import ShowName from './component/ShowName';


function App() {
  return (
    <div className="App">
      
      <ShowName>
        <Taro></Taro>
      </ShowName>
      <ShowName children={<Taro></Taro>}/>
    </div>
  );
}

export default App;
