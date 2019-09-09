import React from 'react';
import Axios from '../helpers/axiosConfig.js';
import History from './History.js';

class UserHistory extends React.Component {
  state = {
    userHistory: []
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
    this.getUserHistory();
  }

  render(){
    return(
      <div className="user-history-wrapper">
        <h3>Recently asked Questions</h3>
        {this.state.userHistory ? 
          <ul className="user-history">
            {this.state.userHistory.map((history, index) => {
              return(
                <History history={history} key={index}/>
              )
            })}
          </ul> : 
          <p>No search history yet. Ask a question!</p>
        }
      </div>
    )
  }
};

export default UserHistory;