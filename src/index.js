import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import CreateLesson from './components/CreateLesson';
import UserProfile from './components/UserProfile';


import { Router, Route, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom'



ReactDOM.render((
  <BrowserRouter>
    <div className="container-fluid">
        <Route exact path='/' component={App}/>
        <Route path='/create-lesson' component={CreateLesson}/>
        <Route path='/profile' component={UserProfile}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
