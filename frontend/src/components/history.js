import React from 'react';

const History = props => {
  return(
    <li>
      <p>{props.history.question}</p>
      <a href={props.history.bot_response[0].URL}>{props.history.bot_response[0].name}</a>
    </li>
  );
};

export default History;