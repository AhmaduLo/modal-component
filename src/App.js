import React, { useState } from 'react';
import Modal from './components/Modal'; // Assurez-vous que le chemin est correct

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Afficher le modal</button>
      <Modal 
        show={showModal} 
        onClose={handleCloseModal} 
        message="Employé Créé !" 
      />
    </div>
  );
}

export default App;