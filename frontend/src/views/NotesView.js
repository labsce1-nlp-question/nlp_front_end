import React, { useEffect } from 'react';

import { getUserNotes } from '../store/actions/index.js';
import NoteCard from '../components/NoteCard.js';

//Make changes to backend to sort bassed on time updated note created
const NotesView  = ({ signOut, state, dispatch }) => {
  const { notes, fetchingData } = state;

  useEffect(() => {
    console.log("running useEffect user notes view")
    getUserNotes(dispatch, signOut);
  }, [signOut, dispatch]);

  return(
    <section className="notes-view-wrapper">
      <>
        {fetchingData ? <div className="loading-spinner">Loading...</div> : null}
        <h2 className="note-view-header">Notes</h2>
        <div className="notes-wrapper">
          {notes.length > 0 ? 
            notes.map(note => {
              return <NoteCard note={note} key={note.id} dispatch={dispatch}/>;
            })
          : <p>No notes yet!</p>}
        </div>
      </> 
    </section>
  );
};

export default NotesView;