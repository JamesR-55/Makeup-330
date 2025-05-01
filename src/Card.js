import React, { useState } from 'react';
import Modal from './Modal';

const Card = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const cards = [
    {
      title: 'Card One',
      text: 'This is the first card.',
    },
    {
      title: 'Card Two',
      text: 'This is the second card.',
    },
    {
      title: 'Card Three',
      text: 'This is the third card.',
    },
  ];

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <div style={styles.container}>
      {cards.map((card, index) => (
        <div key={index} style={styles.card}>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
          <button onClick={() => openModal(`More info about ${card.title}`)}>Open Modal</button>
        </div>
      ))}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} content={modalContent} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '2rem',
  },
  card: {
    backgroundColor: '#f4f4f4',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1.5rem',
    width: '30%',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
};

export default Card;
