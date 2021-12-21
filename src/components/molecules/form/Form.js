//custom Hook import
import useForm from '../../../hooks/useForm';
import validateInfo from '../../../hooks/validateInfo';

// Styled Components
import {
  FormField,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSubmit,
} from './Form.style';

const Form = () => {
  // custom hooks and functions
  const { handleChange, handleSubmit, values, errors, isSubmited } =
    useForm(validateInfo);

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <FormField>
          <StyledLabel for='name'>Name</StyledLabel>
          <StyledInput
            className={errors.name ? 'incorrect' : isSubmited ? 'correct' : ''}
            type='text'
            name='name'
            id='name'
            value={values.name}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <StyledLabel for='email'>Email</StyledLabel>
          <StyledInput
            className={errors.email ? 'incorrect' : isSubmited ? 'correct' : ''}
            type='email'
            name='email'
            id='email'
            value={values.email}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <StyledLabel for='password'>Password</StyledLabel>
          <StyledInput
            className={
              errors.password ? 'incorrect' : isSubmited ? 'correct' : ''
            }
            type='password'
            name='password'
            id='password'
            value={values.password}
            onChange={handleChange}
          />
        </FormField>
        <StyledSubmit type='submit' value='submit' />
        {isSubmited && (
          <p style={{ margin: 0, padding: 0, color: 'green' }}>
            Your form has been submitted! Feel free to exit
          </p>
        )}
      </StyledForm>
    </>
  );
};

export default Form;
