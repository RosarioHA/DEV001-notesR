import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs'
import NotesForm from './form';
import '../styles/Modal.css';

function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  return (
    <section className="modal-container">
      <div className="show-modal-container">
        <div className="close-icon">
          <BsFillPlusCircleFill type="button" className="close" onClick={onClose} />
        </div>
        <NotesForm />
        {children}
      </div>
    </section>
  );
}

export default Modal;
