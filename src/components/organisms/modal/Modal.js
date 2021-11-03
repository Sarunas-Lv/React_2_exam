import PropTypes from 'prop-types';
import FormSection from '../form/FormSection';
import Hero from '../hero/Hero';
import React from 'react';
import { Overlay, ModalWrapper, ModalContent } from './Modal.style';

const Modal = () => {
  return (
    <>
      <Overlay></Overlay>
      <ModalWrapper>
        <ModalContent>
          <Hero />
          <FormSection />
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

Modal.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
