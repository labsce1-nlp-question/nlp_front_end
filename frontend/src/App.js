import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import SearchPage from './views/SearchPage.js';
import LoginPage from './components/LoginPage.js';
import UserSearchHistoryView from './views/UserSearchHistoryView.js';
import SlackLogin from './components/SlackLogin.js';
import NoteTakingView from './views/NoteTakingView.js';
import NotesView from './views/NotesView.js';
import SideNav from './components/SideNav.js';

function App(props) {

  const signOut = () => {
    localStorage.clear();
    props.history.push('/');
  }

  return (
    <div className="App">
      { localStorage.getItem("AuthToken") ? 
        <>
          <SideNav history={props.history} signOut={signOut}/>
          <Route exact path = '/' render = {props => <SearchPage {...props} signOut={signOut}/>} />
          <Route path = '/search-history' render = {props => <UserSearchHistoryView {...props} signOut={signOut}/> } />
          <Route path = '/notes' render = {props => <NotesView {...props} signOut={signOut}/>} />
          <Route path = '/note/:id' render = {props => <NoteTakingView {...props} signOut={signOut}/>} />
        </>
        : <LoginPage />
      }
      <Route path = '/slack-login' component = {SlackLogin}/>
    </div>
  );
}

export default withRouter(App);
