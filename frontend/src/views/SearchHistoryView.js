import React from 'react';
import Axios from '../helpers/axiosConfig.js';

import UserHistory from '../components/UserHistory.js';

class SearchHistoryView extends React.Component {
  state = {
    userHistory: [],
  }
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
    return(
      <UserHistory userHistory={this.state.userHistory} signOut={this.signOut}/>
    );
  };
};

export default SearchHistoryView;