import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import QuestionResult from './QuestionResult';

const SearchHistory = ({ history }) => {
  const [ showResults, setShowResults ] = useState(false);
  const [ isExpanded, setisExpanded ] = useState('not-expanded');

  const toggleExpand = e => {
    //set the state to the opposite of what it currently is
    setShowResults(!showResults);
    //if showResults is true add expand class other wise remove it
    return !showResults ? setisExpanded('expanded') : setisExpanded('not-expanded');
  }

  return(
    <tr className={`table-data ${isExpanded}`} onClick={e => toggleExpand(e)}>
      <td className="table-question-data">
        {history.question}
        <div className="table-question-results">
          <h3>Results:</h3>
          {history.bot_response.match.map(result => {
            return(
              <QuestionResult result={result} key={result.id} showDesc={false}/>
            );
          })}
        </div>
      </td>
      {/* Add ability to click the question and have the bot response results listed below 
          expand the row to fit the results, add UI for expanding ability, Create modal for 
          adding a note and replace the create note with a button to make the modal appear.
          Add moment.js to convert timestamp to readable time
      */}
      <td className="table-createdat-data">{history.time}</td>
      <td className="table-note-data">
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