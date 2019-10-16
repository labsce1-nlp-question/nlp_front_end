import React from 'react';

const Note = props => {
  return (
    <div className="notes">
      <h3>Notes</h3>
      <textarea name="notes" row="30" col="50" value={props.notes} spellCheck="true" onChange={props.inputHandler}/>
    </div>
  );
};

export default Note;