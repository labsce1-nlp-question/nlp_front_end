import React from 'react';
import Axios from '../helpers/axiosConfig.js';

import LoginPage from '../components/LoginPage.js';
import TkSearch from '../components/TkSearch.js';
import QuestionResults from '../components/QuestionResults.js';

// import '../styles/MainPage.css';

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
          </div>
        </>
      );
    }
  }
};

export default MainPage;