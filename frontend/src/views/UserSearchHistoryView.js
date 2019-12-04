import React, { useState, useEffect } from 'react';

import { getUserSearchHistory } from '../store/actions/index.js';
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

// Update BE code for getting user history to send back wether their is more data or not. With this message
// display the show more button or not
const UserSearchHistoryView = ({ signOut, toggleModal, state, dispatch }) => {
  const { userHistory, fetchingData } = state;
  const [limit, setLimit] = useState(10);
  const tableHeaders = ["Question", "Searched"];

  const ShowMoreData = () => setLimit(limit+10);

  useEffect(() => {
    console.log("running useEffect search history")
    getUserSearchHistory(dispatch, limit, signOut);
  }, [limit, signOut, dispatch]);

  return(
    <section className="user-history-wrapper">
      { userHistory.length > 0 ? 
          <>
            {fetchingData ? <div className="loading-spinner">Loading...</div> : null}
            <UserSearchHistoryTable caption="Search History" headers={tableHeaders} userHistory={userHistory} toggleModal={toggleModal} dispatch={dispatch}/>
            { userHistory.length > 10 ? <button className="show-more-btn" onClick={() => ShowMoreData()}>Show More</button> : null}
          </>
        : <h2>No search history yet. Ask a question!</h2>
      }
    </section>
  )
}

export default UserSearchHistoryView;