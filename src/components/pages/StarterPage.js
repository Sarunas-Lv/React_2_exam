import React, { useState } from 'react';
import Modal from '../organisms/modal/Modal';
import { CgProfile } from 'react-icons/cg';
import Button from '../atoms/button/Button';
import useForm from '../../hooks/useForm';
const StarterPage = () => {
  const { setIsSubmited } = useForm();
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
      setIsSubmited(false);
    }
    if (e.target.id === 'wrapper') {
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
        {isOpen && <Modal action={closeModal} />}
      </section>
    </main>
  );
};

export default StarterPage;
