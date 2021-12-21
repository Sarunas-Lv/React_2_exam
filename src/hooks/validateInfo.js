const validateInfo = (values) => {
  let errors = {};
  // Name validation
  if (!values.name.trim()) {
    errors.name = true;
  }

  // Email validation
  if (!values.email) {
    errors.email = true;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = true;
  }
  // Password validation
  if (!values.password) {
    errors.password = true;
  } else if (values.password.length < 6) {
    errors.password = true;
  }

  return errors;
};

export default validateInfo;
