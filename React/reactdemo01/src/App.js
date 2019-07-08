import React,{Component}from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import Test from './components/Test'

function App() {
  return (
    <div className="App">
     React的根目录
			//引入组件
		 <Test></Test>
    </div>
  );
}

export default App;
