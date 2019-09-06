import React from 'react';

const QuestionResult = props => {
  return (
    <div className="result" key={props.result.id}>
      <a href={props.result.URL}>{props.result.name}</a>
      <p>{props.result.description}</p>
    </div>
  );
};

export default QuestionResult;