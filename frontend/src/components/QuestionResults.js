import React from 'react';
import QuestionResult from './QuestionResult.js';
import '../styles/QuestionResults.css';

const QuestionResults = props => {
  return (
    <>
      {props.results.length > 0 ?
      <ul className="question-results">
        {props.results.map( result => {
          return(
            <QuestionResult result={result} />
          )
        })} 
      </ul>: null}
    </>
  )
};

export default QuestionResults;