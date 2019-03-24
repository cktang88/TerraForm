import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import './App.css';
import ListView from './ListView';
import Profile from './Profile';
import {fetchData} from './Api';
import LoginForm from './LoginForm';

import {Route, Switch} from 'react-router-dom';

// This function creates a datapoint object, with
// the first row of the spreadsheet as its fields
const createObject = (headers, arr) => {
  let obj = {};
  headers.forEach((header, i) => {
    if (header.toLowerCase() == 'comments') // remove all comments fields to avoid name clash
      return;
    obj[header] = arr[i];
  });
  return obj;
}


function App() {


  const [data, setData] = useState([]);
  const [isAuthenticated, setAuth] = useState(false);

  const updateFormsData = () => {
    fetchData().then((ogData) =>{
      const headers = ogData.values.shift();
      const newdata = ogData.values.map(elem => createObject(headers, elem));
      setData(newdata);
      console.log('arr of arr: ', newdata);
    })
  };


  // update once initially
  useEffect(() => {
    updateFormsData();
    setInterval(updateFormsData, 50000); // every fifty secs periodic update
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Pippin</h1>
        </header>
        <Switch>
          {/* default page */}
          <Route exact path='/' component = {() => <ListView items={data}/>}/>
          {/* matches `/user/:id` as well */}
          <Route path='/user' component = {Profile}/>
          {/* login page */}
          <Route path='/login' component = {LoginForm}/>
        </Switch>
      </div>
  );
}

export default App;
