import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

import './App.css';
import ListView from './ListView';
import Profile from './Profile';
import fetchData from './Api';

import { BrowserRouter, Route , Switch} from 'react-router-dom';;


function App() {


  const [data, setData] = useState([]);

  // update
  useEffect(() => {
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
        <Switch>
          <Route exact path='/' component = {() => <ListView items={data}/>}/>
          <Route path='/user' component = {Profile}/>
        </Switch>
      </div>
  );
}

export default App;
