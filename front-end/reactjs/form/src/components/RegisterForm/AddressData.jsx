import { useState } from 'react';

import {
  TextField,
  Button,
} from '@material-ui/core';

export function AddressData({
  onSubmitForm,
}) {
  const [cep, setCep] = useState(0);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(0);
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  return (
    <form
      onSubmit={(event) => {
        onSubmitForm({
          cep,
          address,
          number,
          state,
          city,
        });
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={cep}
        onChange={(event) => {
          setCep(event.target.value)
        }}
      />

      <TextField
        id="address"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={address}
        onChange={(event) => {
          setAddress(event.target.value)
        }}
      />

      <TextField
        id="number"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={number}
        onChange={(event) => {
          setNumber(event.target.value)
        }}
      />

      <TextField
        id="state"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={state}
        onChange={(event) => {
          setState(event.target.value)
        }}
      />

      <TextField
        id="city"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={city}
        onChange={(event) => {
          setCity(event.target.value)
        }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Finalizar Cadastro
      </Button>
    </form>
  );
}