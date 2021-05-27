import { useState } from 'react';

function createInitState(validations) {
  const initState = {};

  for (let field in validations) {
    initState[field] = {
      valid: true,
      text: '',
    };
  }

  return initState;
}

function useErrors(validations) {
  const initState = createInitState(validations);

  const [errors, setErrors] = useState(initState);

  function canSubmit() {
    for (let field in errors) {
      if (!errors[field].valid) {
        return false;
      }
    }

    return true;
  }

  function validFields(event) {
    const { name, value } = event.target;
    const isValid = validations[name](value);
    const newState = { ...errors };
    newState[name] = isValid;
    setErrors(newState);
  }

  return [errors, validFields, canSubmit];
}

export { useErrors };
