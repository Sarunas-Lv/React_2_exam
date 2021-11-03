import React from 'react';
import Form from '../../molecules/form/Form';
import GetStartedSection from '../../molecules/get-started-section/GetStartedSection';
import { StyledForm, StyledFormText } from './FormSection.style';
const FormSection = () => {
  return (
    <>
      <StyledForm>
        <GetStartedSection />
        <StyledFormText>Or</StyledFormText>
        <Form />
      </StyledForm>
    </>
  );
};

export default FormSection;
