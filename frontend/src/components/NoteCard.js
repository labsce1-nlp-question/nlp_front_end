import React from 'react';
import { Link } from 'react-router-dom';

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
          <p>Created at: {note.time}</p>
          <p>Updated at: {note.time_updated_at}</p>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;