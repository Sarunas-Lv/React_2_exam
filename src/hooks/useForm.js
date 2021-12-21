import { useState } from 'react';

const useForm = (validateInfo) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);
  const handleChange = (e) => {
    setErrors({});
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmited(true);
  };
  return { handleChange, handleSubmit, values, errors, isSubmited, setIsSubmited };
};

export default useForm;
