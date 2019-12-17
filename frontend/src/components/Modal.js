import React from "react";

// showModal prop boolean value used to display contents within the modal component
// toggleModal function prop to change the showModal state
const Modal = ({ children, showModal, toggleModal, headerVal }) => {
  return(
    <>
      {showModal ? 
        <div className="modal-wrapper">
          <div className="modal">
            <header className="modal-header">
              {headerVal ? <h2>{headerVal}</h2> : null}
              <button className="close-modal-btn" onClick={() => toggleModal(!showModal)}>X</button>
            </header>
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, {...child.props});
            })}
          </div>
        </div>
      : null}
    </>
  );
};

export default Modal;