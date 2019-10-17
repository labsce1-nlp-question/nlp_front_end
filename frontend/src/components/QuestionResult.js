import React from 'react';

const QuestionResult = props => {
  return (
    <div className="result">
      <a className="result-url" href={props.result.URL}>
        <h2>{props.result.name}</h2>
        <div>{props.result.URL}</div>
      </a>
      <p>{props.result.description}</p>
    </div>
  );
};

export default QuestionResult;