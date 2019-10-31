import React from 'react';
import Table from './Table.js';

const UserSearchHistory = ({ userHistory }) =>{
  const tableHeaders = ["Question", "Created", "Note"];

  return(
    <section className="user-history-wrapper">
      { userHistory ?
        <Table caption="Search History" headers={tableHeaders} tableData={userHistory}/>
        :
        <h2>No search history yet. Ask a question!</h2>
      }
    </section>
  )
};

export default UserSearchHistory;