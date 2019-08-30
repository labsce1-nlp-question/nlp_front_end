import React from 'react';
import Slb from '../components/slack_login_button.js';
import TkSearch from '../components/tk_search.js';
import axios from 'axios';

class MainPage extends React.Component {
  state = {
    results: []
  };
  sendQuestion = (e, q) => {
    e.preventDefault();
    const question = { question: q };

    axios
      .post(`http://localhost:3000/api/question`, question, { headers: { Authorization: localStorage.getItem('id')}})
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };
  signOut = () => {
    localStorage.clear();
    this.props.history.push('/');
  };
  render(){
    if(!localStorage.getItem('id')){
      return <Slb/>
    } else {
      return (
        <>
          <button onClick={() => this.signOut()}>Sign Out</button>
          <TkSearch sendQuestion={this.sendQuestion}/>
          {this.state.results.map( result => {
            return(
              <div key={result.id}>
                <a href={result.URL}>{result.name}</a>
                <p>{result.description}</p>
              </div>
            );
          })}
        </>
      );
    }
  }
};

export default MainPage;