import React from 'react';

const UserHistory = props => {
  return(
    <ul>
      {props.userHistory.map((history, index) => {
        return(
          <li key={index}>
            <p>{history.question}</p>
            <a href={history.bot_response[0].URL}>{history.bot_response[0].name}</a>
          </li>
        )
      })}
    </ul>
  )
};

export default UserHistory;