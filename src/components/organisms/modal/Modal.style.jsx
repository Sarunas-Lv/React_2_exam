import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f3f3f3a4;
`;

export const ModalContent = styled.div`
  height: 620px;
  width: 980px;

  z-index: 12;

  background-color: #f3877d;
  border: 3px solid #f2877d;
  border-radius: 15px;
  padding: 0;
  display: flex;
  overflow: hidden;
`;
