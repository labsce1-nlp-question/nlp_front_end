import React from 'react';
import SearchHistory from './SearchHistory.js';

const UserSearchHistoryTable = ({ caption, headers, userHistory })=> {
  return(
    <div className="user-history-table">
      <h2 className="user-history-table-caption">{caption}</h2>
      <header className="user-history-table-headers">
        {headers.map((header, index) => {
          return(
            <h3 key={index}>{header}</h3>
          );
        })}
      </header>
      <div className="user-history-table-data-wrapper">
        {userHistory.map(history => {
          return(
            <SearchHistory history={history} key={history.id}/>
          )
        })}
      </div>
    </div>
  );
}

export default UserSearchHistoryTable;