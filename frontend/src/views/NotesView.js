import React,{ useState, useEffect } from 'react';
import Axios from '../helpers/axiosConfig.js';

import NoteCard from '../components/NoteCard.js';

const NotesView  = ({ signOut })=> {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getUserNotes = () => {
      Axios()
        .get('/history/notes')
        .then(res => setNotes(res.data))
        .catch(err => {
          //if token has expired logout the user
          if(err.response.status === 401){
            alert(err.response.data.message);
            signOut();
          }
          console.log(err.response)
        });
    };
    getUserNotes();
  },[signOut]);

  return(
    <div className="notes-view-wrapper">
      <h2>Notes</h2>
      <div className="notes-wrapper">
        {notes.length > 0 ? 
          notes.map(note => {
            return <NoteCard note={note}/>;
          })
        : <p>No notes yet!</p>}
      </div>
    </div>
  );
};

export default NotesView;