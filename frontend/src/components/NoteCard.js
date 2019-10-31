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
        <h2>{note.title}</h2>
        <p>Note: {note.notes}</p>
        <p>Created at: {note.time}</p>
        <p>Updated at: {note.time_updated_at}</p>
      </div>
    </Link>
  );
};

export default NoteCard;