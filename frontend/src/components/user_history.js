import React from 'react';
import axios from 'axios';
import History from './history.js';

class UserHistory extends React.Component {
  state = {
    userHistory: []
  };
  getUserHistory = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/history?limit=10`, { headers: { Authorization: localStorage.getItem('id')}})
      .then(res => this.setState({ userHistory: res.data }))
      .catch(err => {
        if(err.response.status === 401){
          this.signOut();
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
      <>
        {this.state.userHistory ? 
          <ul>
            {this.state.userHistory.map((history, index) => {
              return(
                <History history={history} key={index}/>
              )
            })}
          </ul> : 
          <p>No search history yet. Ask a questions!</p>
        }
      </>
    )
  }
};

export default UserHistory;