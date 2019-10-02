import React from 'react';
import History from './History.js';

const UserHistory = props =>{
  return(
    <div className="user-history-wrapper">
      <h3>Recently asked Questions</h3>
      {props.userHistory ? 
        <ul className="user-history">
          {props.userHistory.map(history => {
            return(
              <History history={history} key={history.id}/>
            )
          })}
        </ul> : 
        <p>No search history yet. Ask a question!</p>
      }
    </div>
  )
};

export default UserHistory;