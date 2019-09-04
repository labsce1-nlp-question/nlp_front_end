import React from 'react';

const QuestionResults = props => {
  return (
    <ul>
      {props.results.map( result => {
        return(
          <div key={result.id}>
            <a href={result.URL}>{result.name}</a>
            <p>{result.description}</p>
          </div>
        )
      })}
    </ul>
  )
};

export default QuestionResults;