import React from 'react';
import QuestionResult from './QuestionResult.js';

const QuestionResults = ({ data, createNote }) => {
  return (
    <>
      {data.results.length > 0 ?
        <div className="question-results-wrapper">
          <div className="create-note-wrapper">
            <p>Want to save these results? Create a note!</p>
            <button className="user-history-note-btn" onClick={() => createNote(data.history)}>
              <i className="fas fa-pen"/> 
              <span>Create Note</span>
            </button>
          </div>
          <ul className="question-results">
            {data.results.map( result => {
              //check if the results description is over 300 characters long, slice it to keep descriptions in a consistent length range
              if(result.description.length > 400){
                result.description = result.description.slice(0, 400) + '...';
              }
              return(
                <QuestionResult result={result} key={result.id} showDesc={true}/>
              )
            })} 
          </ul>
        </div>: null}
    </>
  )
};

export default QuestionResults;