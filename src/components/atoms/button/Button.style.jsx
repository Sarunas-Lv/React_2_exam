import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 0;
  padding: 9px 45px;
  width: 200px;
  background-color: ${(props) => (props.facebook ? '#4F70B5' : '#fff')};
  color: ${(props) => (props.facebook ? '#fff' : '#000')};
  font-size: 15px;

  border: 1px solid lightgray;
  box-shadow: 5px 5px 15px 5px #b8b8b839;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;

export const StyledButtonLogo = styled.b`
  font-size: 19px;
`;
