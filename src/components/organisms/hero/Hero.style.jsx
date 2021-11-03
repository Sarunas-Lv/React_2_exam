import styled from 'styled-components';

export const StyledHero = styled.div`
  margin: 0;
  height: 620px;
  width: calc(980px / 2);

  background-color: #f3877d;
  display: flex;
  flex-direction: column;
`;

export const StyledLogoContainer = styled.div`
  height: 18%;
  width: 100%;

  padding-left: 32px;

  display: flex;
  flex-direction: start;
`;

export const StyledLogo = styled.img`
  width: 30%;
`;
export const StyledHeroImageContainer = styled.div`
  height: 64%;
  width: 100%;

  padding-left: 32px;

  display: flex;
  flex-direction: start;
`;
export const StyledHeroImage = styled.img`
  width: 80%;
`;

export const StyledHeroTextContainer = styled.div`
  height: 18%;
  width: 100%;

  padding-top: 20px;

  display: flex;
  justify-content: center;
  text-align: center;
`;
export const StyledHeroText = styled.span`
  font-size: 1.2em;
  width: 45%;

  color: #fff;
`;
