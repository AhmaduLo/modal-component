import React from 'react';
//import './style/modal.scss'; // Importez le fichier SCSS

const Modal = ({ show, onClose, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-content">
        <span
          className="close"
          onClick={onClose}
          role="button"
          aria-label="Fermer"
        >
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;