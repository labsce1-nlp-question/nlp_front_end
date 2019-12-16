import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { UPDATING_USER_NOTE } from '../store/actions/index.js';
import QuestionResult from "./QuestionResult.js";

const SearchHistoryRow = ({ history, toggleModal, dispatch, deleteHistory }) => {
  const {id, question, time, bot_response } = history;
  const [showResults, setShowResults] = useState(false);
  const [isExpanded, setisExpanded] = useState("not-expanded");

  const toggleExpand = (e) => {
    if(e.target.localName === "button" || (e.target.parentElement.localName === "button")) return;
    
    setShowResults(!showResults);
    
    return !showResults ? setisExpanded("expanded") : setisExpanded("not-expanded");
  }

  const createNote = () => {
    dispatch({ type: UPDATING_USER_NOTE, payload: history });
    toggleModal();
  }

  return(
    <div className={`user-history-table-data ${isExpanded}`} onClick={(e) => toggleExpand(e)}>
      <span className="expand-btn" >
        { showResults ? <i className="fas fa-chevron-down"/> : <i className="fas fa-chevron-right"/>}
      </span>
      <div className="user-history">
        <p className="user-history-question">{question}</p>
        <span className="user-history-timestamp">
          { moment(new Date(time)).fromNow() }
        </span>
        <div className="user-history-note">
          { history.notes ?
            <button className="user-history-note-btn">
              <Link to={`/note/${id}`} onClick={() => dispatch({ type: UPDATING_USER_NOTE, payload: history })}>
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
          <button className="user-history-del-btn" onClick={() => deleteHistory(id)}>
            <i className="fas fa-trash"/>
            <span>Delete</span>
          </button>
        </div>
        <div className="user-history-results">
          <h2>Bot Response:</h2>
          {bot_response.match.map(result => {
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