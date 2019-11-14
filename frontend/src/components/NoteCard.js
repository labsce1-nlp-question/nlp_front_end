import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { UPDATING_USER_NOTE } from '../store/actions/index.js';

const NoteCard = ({ note, dispatch }) => {
  return(
    <Link
      to={`/note/${note.id}`}
      className="note-card"
      onClick={() => dispatch({ type: UPDATING_USER_NOTE, payload: note })}
    >
      <div className="note">
        <h2>{note.title ? note.title : 'No Title'}</h2>
        <div className="note-card-preview">
          <p>{note.notes}</p>
        </div>
        <div className="note-card-timestamps">
          <span>Created:<br/>{moment(new Date(note.time)).fromNow()}</span>
          <span>Updated:<br/>{moment(new Date(note.time_updated_at)).fromNow()}</span>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;