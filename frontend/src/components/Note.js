import React from 'react';

const Note = ({ note, updateNote }) => {
  return (
    <div className="notes">
      <h3>Note</h3>
      <textarea name="note" row="30" col="50" value={note} spellCheck="true" onChange={e => updateNote(e.target.value)}/>
    </div>
  );
};

export default Note;