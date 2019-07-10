import React, { Conponent } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
// import Home from './components/Home';
// import News from './components/News';
// import Event from './components/Event';
import List from './components/List';

function App() {
  return (
    <div className="App">
      react根目录
	{/*		<Home></Home>	 
		<News></News>
		<Event ></Event > */}
      <List></List>
    </div>
  );
}
export default App;
