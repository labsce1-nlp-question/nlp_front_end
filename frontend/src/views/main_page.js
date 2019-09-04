import React from 'react';
import axios from 'axios';
import SlackLogin from '../components/slack_login_button.js';
import TkSearch from '../components/tk_search.js';
import QuestionResults from '../components/question_results.js';
import UserHistory from '../components/user_history.js';
import '../styles/main_page.css';

class MainPage extends React.Component {
  state = {
    results: [],
    error: ''
  };
  sendQuestion = (e, q) => {
    e.preventDefault();
    const question = { question: q };

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/question`, question, { headers: { Authorization: localStorage.getItem('id')}})
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
    if(!localStorage.getItem('id')){
      return <SlackLogin/>
    } else {
      return (
        <>
          <button onClick={() => this.signOut()}>Sign Out</button>
          <div className="main-page-wrapper">
            <div className="search-wrapper">
              <TkSearch sendQuestion={this.sendQuestion}/>
              {this.state.error ? <p>{this.state.error}</p> : <QuestionResults results={this.state.results}/> }
            </div>
            <UserHistory/>
          </div>
        </>
      );
    }
  }
};

export default MainPage;