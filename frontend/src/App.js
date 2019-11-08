import React, { useState, useCallback} from 'react';
import { Route, withRouter } from 'react-router-dom';

import SearchPage from './views/SearchPage.js';
import LoginPage from './components/LoginPage.js';
import UserSearchHistoryView from './views/UserSearchHistoryView.js';
import SlackLogin from './components/SlackLogin.js';
import NoteTakingView from './views/NoteTakingView.js';
import NotesView from './views/NotesView.js';
import SideNav from './components/SideNav.js';
import CreateNoteModal from './components/CreateNoteModal.js';

function App(props) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = e => {
    e.preventDefault();
    setShowModal(!showModal)
  };

  const signOut = useCallback(() => {
    localStorage.clear();
    props.history.push('/');
  }, [props.history]);

  return (
    <div className="App">
      { localStorage.getItem("AuthToken") ? 
        <>
          <SideNav history={props.history} signOut={signOut}/>
          {showModal ? <CreateNoteModal /> : null}
          <Route exact path = '/' render = {props => <SearchPage {...props} signOut={signOut}/>} />
          <Route path = '/search-history' render = {props => <UserSearchHistoryView {...props} signOut={signOut} toggleModal={toggleModal}/> } />
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
