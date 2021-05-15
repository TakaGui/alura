import {
  TextField,
  Button,
} from '@material-ui/core';

export function AddressData() {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="address"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="number"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="state"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="city"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
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