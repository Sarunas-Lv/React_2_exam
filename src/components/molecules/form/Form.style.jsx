import styled from 'styled-components';

export const StyledForm = styled.form`
  height: 70%;
  width: 100%;
`;
export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
export const StyledInput = styled.input`
  padding: 5px 42px;
  width: 75%;
  font-size: 18px;
  color: gray;
`;
export const StyledLabel = styled.label`
  font-size: 20px;
  margin-bottom: 3px;
`;
export const StyledSubmit = styled.input`
  margin-top: 0.7em;
  border: none;
  background-color: #f2877d;
  width: 95%;
  padding: 9px 42px;
  text-align: center;
  color: white;
  font-size: 22px;
  text-transform: capitalize;

  &:hover {
    background-color: #e78077;
  }
`;
