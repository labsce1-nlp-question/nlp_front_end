import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const NoteCard = ({ note }) => {
  return(
    <Link 
      key={note.id} 
      to={{
        pathname: `/note/${note.id}`,
        state: { note } 
      }}
      className="note-card"
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