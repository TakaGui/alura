import {
  useState,
  useContext,
} from 'react';

import {
  TextField,
  Button,
} from '@material-ui/core';

import { FormValidation } from '../../contexts/FormValidations';
import { useErrors } from '../../hooks/useErrors';

export function UserData({
  onSubmitForm,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validations = useContext(FormValidation);

  const [errors, validFields, canSubmit] = useErrors(validations);

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