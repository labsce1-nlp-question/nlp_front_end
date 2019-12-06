import React from 'react';

const QuestionResult = ({ result, showDesc }) => {
  return (
    <a className="result" href={result.URL} target="_blank" rel="noopener noreferrer">
      <h2>{result.name}</h2>
      <div>{result.URL}</div>
      {showDesc ? <p>{result.description}</p> : null}
    </a>
  );
};

export default QuestionResult;