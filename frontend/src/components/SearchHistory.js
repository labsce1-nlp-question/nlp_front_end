import React from 'react';
import { Link } from 'react-router-dom';

const SearchHistory = ({ history }) => {
  return(
    <tr>
      <td>
        <Link to={{
          pathname: `/note/${history.id}`,
          state: { history } 
        }}>
          {history.question}
        </Link>
      </td>
      <td>{history.time}</td>
    </tr>
  );
};

export default SearchHistory;