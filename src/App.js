import React from 'react';
import {Route} from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import './App.css';

const App = () => (
      <div className="ui container">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={LoginPage}/>
      </div>
)

export default App;
