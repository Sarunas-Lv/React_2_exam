import {
  FormField,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSubmit,
} from './Form.style';

const Form = () => {
  return (
    <>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormField>
          <StyledLabel for='name'>Name</StyledLabel>
          <StyledInput type='text' name='name' id='name' />
        </FormField>
        <FormField>
          <StyledLabel for='email'>Email</StyledLabel>
          <StyledInput type='email' name='email' id='email' />
        </FormField>
        <FormField>
          <StyledLabel for='password'>Password</StyledLabel>
          <StyledInput type='password' name='password' id='password' />
        </FormField>
        <StyledSubmit type='submit' value='submit' />
      </StyledForm>
    </>
  );
};

export default Form;
