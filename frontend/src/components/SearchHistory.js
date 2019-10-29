import React from 'react';
import { Link } from 'react-router-dom';

const SearchHistory = ({ history }) => {
  return(
    <tr>
      <td>{history.question}</td>
      <td>{history.time}</td>
      <td>
        { history.notes ? 
          <Link to={{
            pathname: `/note/${history.id}`,
            state: { history } 
          }}>
            View Note
          </Link> 
          : "Create Note"
        }
      </td>
    </tr>
  );
};

export default SearchHistory;