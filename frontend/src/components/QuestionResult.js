import React from 'react';

const QuestionResult = ({ result, showDesc }) => {
  return (
    <div className="result">
      <a className="result-url" href={result.URL}>
        <h2>{result.name}</h2>
        <div>{result.URL}</div>
      </a>
      {showDesc ? <p>{result.description}</p> : null}
    </div>
  );
};

export default QuestionResult;