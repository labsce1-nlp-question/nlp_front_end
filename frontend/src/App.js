import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './views/MainPage.js';
import SlackLogin from './views/SlackLogin.js';
import NotesView from './views/NotesView.js';

function App() {

  return (
    <div className="App">
      <Route exact path = '/' component = {MainPage}/>
      <Route path = '/slack-login' component = {SlackLogin}/>
      <Route path = '/history/:id' component = {NotesView}/>
    </div>
  );
}

export default App;
