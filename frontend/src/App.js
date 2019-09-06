import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './views/MainPage.js';
import SlackLogin from './views/SlackLogin.js';

function App() {

  return (
    <div className="App">
      <Route exact path = '/' component = {MainPage}/>
      <Route path = '/slack-login' component = {SlackLogin}/>
    </div>
  );
}

export default App;
