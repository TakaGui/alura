import {
  useState,
  useContext,
} from 'react';

import {
  TextField,
  Button,
} from '@material-ui/core';

import { FormValidation } from '../../contexts/FormValidations';

export function UserData({
  onSubmitForm,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    password: {
      valid: true,
      text: '',
    },
  });

  const validations = useContext(FormValidation);

  function validFields(event) {
    const { name, value } = event.target;
    const isValid = validations[name](value);
    const newState = { ...errors };
    newState[name] = isValid;
    setErrors(newState);
  }

  function canSubmit() {
    for (let field in errors) {
      if (!errors[field].valid) {
        return false;
      }
    }

    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (canSubmit()) {
          onSubmitForm({
            email,
            password,
          });
        }
      }}
    >
      <TextField
        id="email"
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <TextField
        id="password"
        label="Senha"
        name="password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        onBlur={validFields}
        error={!errors.password.valid}
        helperText={errors.password.text}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Próximo
      </Button>
    </form>
  );
}