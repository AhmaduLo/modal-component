import React from "react";

const Modal = ({ show, onClose, message }) => {
  // Si la propriété "show" est fausse, ne rien afficher (retourne null)
  if (!show) {
    return null;
  }
  // Sinon, afficher le contenu du modal
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
