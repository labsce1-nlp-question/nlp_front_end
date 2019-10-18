import React, { useState, useEffect } from 'react';
import Axios from '../helpers/axiosConfig.js';

import UserSearchHistory from '../components/UserSearchHistory.js';

// ------class component------
// class UserSearchHistoryView extends React.Component {
//   state = {
//     userHistory: [],
//   }
//   getUserHistory = () => {
//     Axios()
//       .get('/history?limit=10')
//       .then(res => this.setState({ userHistory: res.data }))
//       .catch(err => {
//         if(err.response.status === 401){
//           this.props.signOut();
//           alert(err.response.data.message);
//         }
//         console.log(err.response)
//       });
//   }

//   componentDidMount = () => {
//     this.getUserHistory();
//   }

//   render(){
//     return(
//       <UserSearchHistory userHistory={this.state.userHistory} signOut={this.signOut}/>
//     );
//   };
// };

// ------functional component with hooks------

const UserSearchHistoryView = ({ signOut }) => {
  const [ userHistory, setUserHistory ] = useState([]);

  //fetch data from back end, dependent on signOut funtion prop from parent
  //this useEffect only runs the first time the component renders
  useEffect(() => {
    const getUserHistory = () => {
      Axios()
        .get('/history?limit=10')
        .then(res => setUserHistory(res.data))
        .catch(err => {
          if(err.response.status === 401){
            alert(err.response.data.message);
            signOut();
          }
          console.log(err.response)
        });
    }
    console.log("running");
    getUserHistory();
  }, [signOut]);


  return(
    <UserSearchHistory userHistory={userHistory} />
  )
}

export default UserSearchHistoryView;