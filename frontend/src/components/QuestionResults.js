import React from 'react';
import QuestionResult from './QuestionResult.js';

const QuestionResults = props => {
  return (
    <>
      {props.results.length > 0 ?
      <ul className="question-results">
        {props.results.map( result => {
          return(
            <QuestionResult result={result} key={result.id}/>
          )
        })} 
      </ul>: null}
    </>
  )
};

export default QuestionResults;