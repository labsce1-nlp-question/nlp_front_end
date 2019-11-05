import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import QuestionResult from "./QuestionResult";

const SearchHistory = ({ history }) => {
  const [ showResults, setShowResults ] = useState(false);
  const [ isExpanded, setisExpanded ] = useState("not-expanded");

  const toggleExpand = () => {
    setShowResults(!showResults);
    
    return !showResults ? setisExpanded("expanded") : setisExpanded("not-expanded");
  }

  return(
  //   {/* Add ability to click the question and have the bot response results listed below 
  //       expand the row to fit the results, add UI for expanding ability, Create modal for 
  //       adding a note and replace the create note with a button to make the modal appear.
  //       Add moment.js to convert timestamp to readable time
  //   */}
    <div className={`user-history-table-data ${isExpanded}`}>
      <span className="expand-btn" onClick={() => toggleExpand()}>
        { showResults ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}
      </span>
      <div className="user-history">
        <p className="user-history-question">{history.question}</p>
        <span className="user-history-timestamp">
          { moment(new Date(history.time)).fromNow() }
        </span>
        <div className="user-history-note">
          { history.notes ? 
            <Link to={{
              pathname: `/note/${history.id}`,
              state: { note: history } 
            }}>
              View Note
            </Link> 
            : "Create Note"
          }
        </div>
        <div className="user-history-results">
          <h2>Bot Response:</h2>
          {showResults ? history.bot_response.match.map(result => {
            return(
              <QuestionResult result={result} key={result.id} showDesc={false}/>
            );
          }) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchHistory;