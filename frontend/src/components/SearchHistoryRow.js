import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { UPDATING_USER_NOTE } from '../store/actions/index.js';
import QuestionResult from "./QuestionResult.js";

const SearchHistoryRow = ({ history, toggleModal, dispatch }) => {
  const [showResults, setShowResults] = useState(false);
  const [isExpanded, setisExpanded] = useState("not-expanded");

  const toggleExpand = () => {
    setShowResults(!showResults);
    
    return !showResults ? setisExpanded("expanded") : setisExpanded("not-expanded");
  }

  const createNote = () => {
    dispatch({ type: UPDATING_USER_NOTE, payload: history });
    toggleModal();
  }

  return(
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
            <button className="user-history-note-btn">
              <Link to={`/note/${history.id}`} onClick={() => dispatch({ type: UPDATING_USER_NOTE, payload: history })}>
                <i className="fas fa-sticky-note"/>
                <span>View Note</span>
              </Link>
            </button>
            : <button className="user-history-note-btn" onClick={() => createNote()}>
                <i className="fas fa-pen"/> 
                <span>Create Note</span>
              </button>
          }
          {/* Set up Delete button, as well as ability to select multiple and delete those as well. Possibly delete all? */}
          <button className="user-history-del-btn">
            <i className="fas fa-trash"/>
            <span>Delete History</span>
          </button>
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
    </div>
  );
};

export default SearchHistoryRow;