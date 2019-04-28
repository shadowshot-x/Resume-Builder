import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'  
import Home from './Home';
import Developer from './Developer';

const routing = (
    <Router>
      <div>
      <Route path="/home" component={Home} />
      <Route path="/base" component={App} />
      <Route path="/main" component={Main} />
      <Route path="/developer" component={Developer} />
      </div>
    </Router>
  )
 

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
