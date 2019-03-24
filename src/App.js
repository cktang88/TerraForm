import React, {useState, useEffect} from 'react';
// import styled from 'styled-components';
import logo from './logo.svg';

import './App.css';
import ListView from './ListView';

import fetchData from './Api';

console.log('lol2')
function App() {


  const [data, setData] = useState([]);

  // update
  useEffect(() => {
    console.log('lol22')
    fetchData().then((data) =>{
      setData(data.values);
      console.log('updated: ', data);
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Gforms view</h1>
      </header>
      <ListView items={data}/>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
