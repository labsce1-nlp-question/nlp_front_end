import React, { useEffect } from 'react';


import { getUserNotes } from '../store/actions/index.js';
import NoteCard from '../components/NoteCard.js';

const NotesView  = ({ signOut, state, dispatch }) => {
  const { notes, fetchingData } = state;

  useEffect(() => {
    console.log("running useEffect user notes")
    getUserNotes(dispatch, signOut);
  }, [signOut, dispatch]);

  return(
    <section className="notes-view-wrapper">
      {fetchingData ? <div>Loading...</div> 
        : <>
            <h2>Notes</h2>
            <div className="notes-wrapper">
              {notes.length > 0 ? 
                notes.map(note => {
                  return <NoteCard note={note} key={note.id}/>;
                })
              : <p>No notes yet!</p>}
            </div>
          </> 
      }
    </section>
  );
};

export default NotesView;