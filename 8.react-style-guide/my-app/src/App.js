import React, {Component} from 'react'
import Taro from './component/Taro';
import ShowName from './component/ShowName';
import Clicktest from './component/Clicktest';


function App() {
  return (
    <div className="App">
      
      <ShowName>
        <Taro></Taro>
      </ShowName>
      <ShowName children={<Taro></Taro>}/>
      <Clicktest/>
    </div>
  );
}

export default App;
