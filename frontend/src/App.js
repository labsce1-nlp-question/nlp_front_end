import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import MainPage from './views/MainPage.js';
import SlackLogin from './components/SlackLogin.js';
import NotesView from './views/NotesView.js';
import Navbar from './components/NavBar.js';

function App(props) {
  
  const signOut = () => {
    localStorage.clear();
    props.history.push('/');
  };

  return (
    <div className="App">
      <Navbar history={props.history} signOut={signOut}/>
      <Route exact path = '/' render={props => <MainPage {...props} signOut={signOut}/>} />
      <Route path = '/history/:id' render={props => <NotesView {...props} signOut={signOut}/>} />
      <Route path = '/slack-login' component = {SlackLogin}/>
    </div>
  );
}

export default withRouter(App);
