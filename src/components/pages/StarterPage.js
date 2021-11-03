import React, { useState } from 'react';
import Modal from '../organisms/modal/Modal';
import { CgProfile } from 'react-icons/cg';
import Button from '../atoms/button/Button';
const StarterPage = () => {
  // Hooks
  // state
  const [isOpen, setIsOpen] = useState(false);

  // refs  // custom Functions
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };
  document.addEventListener('keyup', closeModal);
  return (
    <main>
      <section className='starter-section'>
        <Button action={() => openModal()}>
          <CgProfile />
        </Button>
        {isOpen && <Modal />}
      </section>
    </main>
  );
};

export default StarterPage;
