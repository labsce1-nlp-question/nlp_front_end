import React from 'react';

import { useInput } from '../helpers/hooks/useInput.js';
import { updateUserNote } from '../store/actions/index.js';

import Axios from '../helpers/axiosConfig.js';

const CreateNoteModal = ({ toggleModal, signOut, state, dispatch }) => {
  const [title, handleTitle] = useInput("");
  const [note, handleNote] = useInput("");

  // Send user note to be added to database
  const createUserNote = e => {
    e.preventDefault();
    const newNote = { title, notes: note };

    updateUserNote(dispatch, state.currentNote, newNote, signOut);
    toggleModal();
    // Axios() 
    //   .put(`/history/update-note/${state.currentNote.id}`, newNote)
    //   .then(res => {
    //     toggleModal();
    //     console.log(res.data)
    //   })
    //   .catch(err => console.log(err.response));
  }

  return(
    <div className="create-note-modal-wrapper">
      <div className="create-note-modal">
        <div className="modal-header">
          <h2>Create Note</h2>
          <button className="close-modal-btn" onClick={() => toggleModal()}>X</button>
        </div>
        <form className="create-note-modal-form" onSubmit={e => createUserNote(e)}>
          <label className="title-input">
            Title:
            <input type="text" placeholder="Note Title" value={title} onChange={e => handleTitle(e.target.value)}/>
          </label>
          <label className="note-input">
            Note:
            <textarea rows="19" cols="50" spellCheck="true" placeholder="Your Note" value={note} onChange={e => handleNote(e.target.value)}/>
          </label>
          <button className="create-note-btn">Create Note</button>
        </form>
      </div>
    </div>
  );
};

export default CreateNoteModal;