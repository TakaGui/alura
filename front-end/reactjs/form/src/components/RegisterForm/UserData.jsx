import {
  TextField,
  Button,
} from '@material-ui/core';

export function UserData() {
  return (
    <form>
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="password"
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
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