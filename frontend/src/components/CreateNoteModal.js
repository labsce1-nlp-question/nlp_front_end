import React from 'react';

import { useInput } from '../helpers/hooks/useInput.js';
import { updateUserNote } from '../store/actions/index.js';

import MarkdownEditor from "../components/MarkdownEditor/MarkdownEditor.js";

const CreateNoteModal = ({ toggleModal, signOut, state, dispatch }) => {
  const [title, handleTitle] = useInput("");
  const [note, handleNote] = useInput("");

  // Send user note to be added to database
  const createUserNote = e => {
    e.preventDefault();
    const newNote = { title, notes: note };

    updateUserNote(dispatch, state.currentNote.id, newNote, signOut);
    toggleModal();
  }

  return(
    <div className="create-note-modal-wrapper">
      <div className="create-note-modal">
        <div className="modal-header">
          <h2>Create Note</h2>
          <button className="close-modal-btn" onClick={() => toggleModal()}>X</button>
        </div>
        <form className="create-note-modal-form" >
          <label className="title-input">
            Title:
            <input type="text" placeholder="Note Title" value={title} onChange={e => handleTitle(e.target.value)}/>
          </label>
          <label className="note-input">
            Note:
            <MarkdownEditor initalValue={note} onChange={handleNote} initalPreview={false}/>
            {/* <textarea rows="19" cols="50" spellCheck="true" placeholder="Your Note" value={note} onChange={e => handleNote(e.target.value)}/> */}
          </label>
          <button className="create-note-btn" onClick={e => createUserNote(e)}>Create Note</button>
        </form>
      </div>
    </div>
  );
};

export default CreateNoteModal;