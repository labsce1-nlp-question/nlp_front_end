import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import MainPage from './views/MainPage.js';
import HistoryView from './views/HistoryView.js';
import SlackLogin from './components/SlackLogin.js';
import NoteView from './views/NoteView.js';
import SideNav from './components/SideNav.js';

function App(props) {
  
  const signOut = () => {
    localStorage.clear();
    props.history.push('/');
  };

  return (
    <div className="App">
      {localStorage.getItem("AuthToken") ? <SideNav history={props.history} signOut={signOut}/> : null}
      <Route exact path = '/' render = {props => <MainPage {...props} signOut={signOut}/>} />
      <Route path = '/search-history' render = {props => <HistoryView {...props} signOut={signOut}/> } />
      <Route path = '/note/:id' render = {props => <NoteView {...props} signOut={signOut}/>} />
      <Route path = '/slack-login' component = {SlackLogin}/>
    </div>
  );
}

export default withRouter(App);
