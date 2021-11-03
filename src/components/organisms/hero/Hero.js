import React from 'react';

import {
  StyledHero,
  StyledLogoContainer,
  StyledLogo,
  StyledHeroImageContainer,
  StyledHeroImage,
  StyledHeroTextContainer,
  StyledHeroText,
} from './Hero.style';
const Hero = () => {
  return (
    <>
      <StyledHero>
        <StyledLogoContainer>
          <StyledLogo
            src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/logo.svg'
            alt='brand logo'
          />
        </StyledLogoContainer>
        <StyledHeroImageContainer>
          <StyledHeroImage
            src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg'
            alt='Hero image'
          />
        </StyledHeroImageContainer>
        <StyledHeroTextContainer>
          <StyledHeroText>
            Start for Free & Get Attractive offers Today!
          </StyledHeroText>
        </StyledHeroTextContainer>
      </StyledHero>
    </>
  );
};

export default Hero;
