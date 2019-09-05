import React from 'react';

const QuestionResults = props => {
  return (
    <>
      {props.results.length > 0 ? 
      <ul>
        {props.results.map( result => {
          return(
            <div key={result.id}>
              <a href={result.URL}>{result.name}</a>
              <p>{result.description}</p>
            </div>
          )
        })} 
      </ul>: null}
    </>
  )
};

export default QuestionResults;