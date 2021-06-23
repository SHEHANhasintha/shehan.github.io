
import React, { Component, useState, useEffect, useContext } from 'react';

import './App.scss';

import {BrowserRouter, Router, Switch, Route, Redirect} from 'react-router-dom';

import MainSections from './page/MainSections/mainSections';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function App(props){

  useEffect(function() {
    //input code here
  }, []);

    return ( 
          <div className="App">
              <BrowserRouter>
                <React.Suspense fallback={loading()}>
                          <Route path="/"  name="Home" render={props => <MainSections {...props}/>} />
                 </React.Suspense>
              </BrowserRouter>
          </div>
        );
}

export default App;
