import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './views/main_page.js';
import SlackLogin from './views/slack_login.js';

function App() {

  return (
    <div className="App">
      <Route exact path = '/' component = {MainPage}/>
      <Route path = '/slack-login' component = {SlackLogin}/>
    </div>
  );
}

export default App;
