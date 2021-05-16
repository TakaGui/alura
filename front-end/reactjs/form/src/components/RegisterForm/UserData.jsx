import { useState } from 'react';

import {
  TextField,
  Button,
} from '@material-ui/core';

export function UserData({
  onSubmitForm
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        onSubmitForm({
          email,
          password,
        });
      }}
    >
      <TextField
        id="email"
        label="Email"
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
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Cadastrar
      </Button>
    </form>
  );
}