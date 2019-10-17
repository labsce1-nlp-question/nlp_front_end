import React from 'react';
import { Link } from 'react-router-dom';

const History = props => {
  return(
    <li className="history">
      <Link to={{
        pathname: `/note/${props.history.id}`,
        state: {history: props.history} 
      }}>
        <p>{props.history.question}</p>
      </Link>
    </li>
  );
};

export default History;