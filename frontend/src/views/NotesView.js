import React from 'react';
import { useFetchData } from '../helpers/hooks/useFetchData.js';

import NoteCard from '../components/NoteCard.js';

const NotesView  = () => {
  const [notes, fetching] = useFetchData('/history/notes');

  return(
    <section className="notes-view-wrapper">
      {fetching ? <div>Loading...</div> 
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