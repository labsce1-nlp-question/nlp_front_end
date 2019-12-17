import React from 'react';

import { useInput } from '../helpers/hooks/useInput.js';
import { updateUserNote } from '../store/actions/index.js';

import MarkdownEditor from "../components/MarkdownEditor/MarkdownEditor.js";
import Modal from "../components/Modal.js";

const CreateNoteModal = ({ showModal, toggleModal, signOut, state, dispatch }) => {
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
    <Modal showModal={showModal} toggleModal={toggleModal} headerVal="Create Note">
      <form className="create-note-modal-form" >
        <label className="title-input">
          Title:
          <input type="text" placeholder="Note Title" value={title} onChange={e => handleTitle(e.target.value)}/>
        </label>
        <label className="note-input">Note:</label>
        <MarkdownEditor initalValue={note} onChange={handleNote} initalPreview={false}/>
        <button className="create-note-btn" onClick={e => createUserNote(e)}>Create Note</button>
      </form>
    </Modal>
  );
};

export default CreateNoteModal;