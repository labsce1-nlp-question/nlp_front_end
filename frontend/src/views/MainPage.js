import React from 'react';
import Axios from '../helpers/axiosConfig.js';

import SlackLogin from '../components/SlackLoginButton.js';
import TkSearch from '../components/TkSearch.js';
import QuestionResults from '../components/QuestionResults.js';
import UserHistory from '../components/UserHistory.js';
import NavBar from '../components/NavBar.js';

import '../styles/MainPage.css';

class MainPage extends React.Component {
  state = {
    results: [],
    error: ''
  };

  sendQuestion = (e, q) => {
    e.preventDefault();
    const question = { question: q };

    Axios()
      .post('question', question)
      .then(res => {
        if(res.data.message){
          this.setState({ error: res.data.message });
        } else {
          this.setState({ results: res.data, error: '' });
        }
      })
      .catch(err => console.log(err.response));
  };

  signOut = () => {

    localStorage.clear();
    this.props.history.push('/');
  };

  render(){
    if(!localStorage.getItem('AuthToken')){
      return <SlackLogin/>
    } else {
      return (
        <>
          <NavBar signOut={this.signOut}/>
          <div className="main-page-wrapper">
            <div className="search-wrapper">
              <TkSearch sendQuestion={this.sendQuestion}/>
              {this.state.error ? <p>{this.state.error}</p> : <QuestionResults results={this.state.results}/>}
            </div>
            <UserHistory signOut={this.signOut}/>
          </div>
        </>
      );
    }
  }
};

export default MainPage;