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
        { showResults ? <i className="fas fa-chevron-down"/> : <i className="fas fa-chevron-right"/>}
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
              {/* Turn into button, when this button is hovered over, expand its width to reveal the text View note/Create Note */}
              <button className="user-history-note-btn">
                <i className="fas fa-sticky-note"/>
                <span>View Note</span>
              </button>
            </Link>
            : <button className="user-history-note-btn">
                <i className="fas fa-pen"/> 
                <span>Create Note</span>
              </button>
          }
        </div>
        <div className="user-history-results">
          <h2>Bot Response:</h2>
          {history.bot_response.match.map(result => {
            return(
              <QuestionResult result={result} key={result.id} showDesc={false}/>
            );
          })}
        </div>
      </div>
      {/* Set up Delete button, as well as ability to select multiple and delete those as well. Possibly delete all? */}
      {/* <button>Delete</button> */}
    </div>
  );
};

export default SearchHistory;