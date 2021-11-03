import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import Button from '../../atoms/button/Button';

import {
  StyledButtonSection,
  StyledFollowup,
  StyledGetStartedContainer,
  StyledHeading,
  StyledQuestion,
} from './GetStartedSection.style';
const GetStartedSection = () => {
  return (
    <section className='get-started-section'>
      <StyledGetStartedContainer>
        <StyledHeading>Get Started</StyledHeading>
        <StyledQuestion>Allready have an account?</StyledQuestion>
        <StyledFollowup>log in</StyledFollowup>
        <StyledButtonSection>
          <Button>
            <FcGoogle />
          </Button>
          <Button facebook>
            <BsFacebook />
          </Button>
        </StyledButtonSection>
      </StyledGetStartedContainer>
    </section>
  );
};

export default GetStartedSection;
