import React from 'react';

const CreateNoteModal = () => {
  return(
    <div className="create-note-modal-wrapper">
      <div className="create-note-modal">
        <h2>Create Note</h2>
        <label>
          Title:
          <input type="text" />
        </label>
      </div>
    </div>
  );
};

export default CreateNoteModal;