import { useState } from 'react';

import {
  TextField,
  FormControlLabel,
  Switch,
  Button,
} from '@material-ui/core';

export function RegisterForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(name, lastName, cpf);
      }}
    >
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        required
        fullWidth
        margin="normal"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <TextField
        id="lastname"
        label="Sobrenome"
        variant="outlined"
        required
        fullWidth
        margin="normal"
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        required
        fullWidth
        margin="normal"
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promotion"
            defaultChecked
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="news"
            defaultChecked
            color="primary"
          />
        }
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