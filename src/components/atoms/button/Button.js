import React from 'react';
import { StyledButton, StyledButtonLogo } from './Button.style';
const Button = ({ facebook, children, action }) => {
  return (
    <StyledButton onClick={action} facebook={facebook}>
      <StyledButtonLogo>{children} </StyledButtonLogo>
       Sign Up
    </StyledButton>
  );
};

export default Button;
