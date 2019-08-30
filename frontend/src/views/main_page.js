import React from 'react';
import axios from 'axios';
import Slb from '../components/slack_login_button.js';
import TkSearch from '../components/tk_search.js';
import QuestionResults from '../components/question_results.js';
import UserHistory from '../components/user_history.js';
import '../styles/main_page.css';

class MainPage extends React.Component {
  state = {
    results: [],
    userHistory: [],
    error: ''
  };
  sendQuestion = (e, q) => {
    e.preventDefault();
    const question = { question: q };

    axios
      .post(`http://localhost:3000/api/question`, question, { headers: { Authorization: localStorage.getItem('id')}})
      .then(res => {
        if(res.data.message){
          this.setState({ error: res.data.message });
        } else {
          this.setState({ results: res.data, error: '' });
        }
      })
      .catch(err => console.log(err));
  };
  getUserHistory = () => {
    axios
      .get(`http://localhost:3000/api/history?limit=10`, { headers: { Authorization: localStorage.getItem('id')}})
      .then(res => this.setState({ userHistory: res.data }))
      .catch(err => console.log(err));
  }
  signOut = () => {
    localStorage.clear();
    this.props.history.push('/');
  };

  componentDidMount = () => {
    this.getUserHistory();
  }
  render(){
    if(!localStorage.getItem('id')){
      return <Slb/>
    } else {
      return (
        <>
          <button onClick={() => this.signOut()}>Sign Out</button>
          <div className="main-page-wrapper">
            <div className="search-wrapper">
              <TkSearch sendQuestion={this.sendQuestion}/>
              {this.state.error ? <p>{this.state.error}</p> : <QuestionResults results={this.state.results}/> }
            </div>
            {this.state.userHistory ? <UserHistory userHistory={this.state.userHistory}/>: <p>No search history yet. Ask a question!</p> } 
          </div>
        </>
      );
    }
  }
};

export default MainPage;