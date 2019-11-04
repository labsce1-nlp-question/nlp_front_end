import React, { useState, useEffect } from 'react';
import Axios from '../helpers/axiosConfig.js';

import UserSearchHistoryTable from '../components/UserSearchHistoryTable.js';

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
  const [ limit, setLimit ] = useState(10);
  const tableHeaders = ["Question", "Searched", "Note"];

  //fetch data from back end, dependent on signOut function prop from parent
  //this useEffect only runs the first time the component renders
  useEffect(() => {
    const getUserHistory = () => {
      Axios()
        .get(`/history?limit=${limit}`)
        .then(res => setUserHistory(res.data))
        .catch(err => {
          //if token has expired logout the user
          if(err.response.status === 401){
            alert(err.response.data.message);
            signOut();
          }
          console.log(err.response)
        });
    }
    getUserHistory();
  }, [signOut, limit]);

  const SetHistoryLimit = e => {
    console.log(e.target.value);
  }

  return(
    <section className="user-history-wrapper">
      <form className="limit-select" onSubmit={e => SetHistoryLimit(e)}>
        <select name="limit">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </form>

      { userHistory.length > 0 ?
        <UserSearchHistoryTable caption="Search History" headers={tableHeaders} userHistory={userHistory}/>
        :
        <h2>No search history yet. Ask a question!</h2>
      }
    </section>
  )
}

export default UserSearchHistoryView;