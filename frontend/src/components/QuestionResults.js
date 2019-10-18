import React from 'react';
import QuestionResult from './QuestionResult.js';

const QuestionResults = props => {
  return (
    <>
      {props.results.length > 0 ?
      <ul className="question-results">
        {props.results.map( result => {
          //check if the results description is over 300 characters long, slice it to keep descriptions in a consistent length range
          if(result.description.length > 400){
            result.description = result.description.slice(0, 400) + '...';
          }
          return(
            <QuestionResult result={result} key={result.id}/>
          )
        })} 
      </ul>: null}
    </>
  )
};

export default QuestionResults;