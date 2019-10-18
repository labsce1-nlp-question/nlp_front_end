import React from 'react';
import Axios from '../helpers/axiosConfig.js';

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
        if(!res.data.message){
          this.setState({ results: res.data, error: '' });
        } else {
          this.setState({ error: res.data.message });
        }
      })
      .catch(err => {
        alert(err.response.data.message);
        if(err.response.data.message.includes("expired")){ 
          this.props.signOut();
        }
      });
  };

  render(){
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
};

export default MainPage;