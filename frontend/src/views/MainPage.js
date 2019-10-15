import React from 'react';
import Axios from '../helpers/axiosConfig.js';

import LoginPage from '../components/LoginPage.js';
import TkSearch from '../components/TkSearch.js';
import QuestionResults from '../components/QuestionResults.js';
import UserHistory from '../components/UserHistory.js';

// import '../styles/MainPage.css';

class MainPage extends React.Component {
  state = {
    results: [],
    userHistory: [],
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

  getUserHistory = () => {
    Axios()
      .get('/history?limit=10')
      .then(res => this.setState({ userHistory: res.data }))
      .catch(err => {
        if(err.response.status === 401){
          this.props.signOut();
          alert(err.response.data.message);
        }
        console.log(err.response)
      });
  }

  componentDidMount = () => {
    if(localStorage.getItem("AuthToken")){
      this.getUserHistory();
    }
  }

  render(){
    if(!localStorage.getItem('AuthToken')){
      return <LoginPage/>
    } else {
      return (
        <>
          <div className="main-page-wrapper">
            <div className="search-wrapper">
              <TkSearch sendQuestion={this.sendQuestion}/>
              {this.state.error ? <p>{this.state.error}</p> : <QuestionResults results={this.state.results}/>}
            </div>
            <UserHistory userHistory={this.state.userHistory} signOut={this.signOut}/>
          </div>
        </>
      );
    }
  }
};

export default MainPage;