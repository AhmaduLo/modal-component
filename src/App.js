import React, { useState } from "react";
import Modal from "./components/Modal"; // Assurez-vous que le chemin est correct

function App() {
  // Déclaration d'un état local pour contrôler l'affichage du modal
  const [showModal, setShowModal] = useState(false);

  // Fonction pour ouvrir le modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Fonction pour fermer le modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Afficher le modal</button>
      {/* Composant Modal avec des props pour contrôler son affichage et son message */}
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        message="Employé Créé !"
      />
    </div>
  );
}

export default App;
