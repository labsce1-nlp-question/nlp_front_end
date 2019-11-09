import React from 'react';
import SearchHistoryRow from './SearchHistoryRow.js';

const UserSearchHistoryTable = ({ caption, headers, userHistory, toggleModal, dispatch })=> {
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
            <SearchHistoryRow key={history.id} history={history} toggleModal={toggleModal} dispatch={dispatch}/>
          )
        })}
      </div>
    </div>
  );
}

export default UserSearchHistoryTable;