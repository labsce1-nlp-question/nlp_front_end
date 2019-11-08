import React, { useState } from 'react';

import UserSearchHistoryTable from '../components/UserSearchHistoryTable.js';
import { useFetchData } from '../helpers/hooks/useFetchData.js';

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

const UserSearchHistoryView = ({ signOut, toggleModal }) => {
  // const [ userHistory, setUserHistory ] = useState([]);
  const [ limit, setLimit ] = useState(10);
  const [ userHistory, fetching ] = useFetchData('/history', signOut);
  const tableHeaders = ["Question", "Searched"];

  const ShowMoreData = () => setLimit(limit+10);
  
  return(
    <section className="user-history-wrapper">
      { fetching ? <div>Loading...</div> 
        : userHistory.length > 0 ? 
          <>
            <UserSearchHistoryTable caption="Search History" headers={tableHeaders} userHistory={userHistory} toggleModal={toggleModal}/>
            <button className="show-more-btn" onClick={() => ShowMoreData()}>Show More</button>
          </>
        : <h2>No search history yet. Ask a question!</h2>
      }
    </section>
  )
}

export default UserSearchHistoryView;