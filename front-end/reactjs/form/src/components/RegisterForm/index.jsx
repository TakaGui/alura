import {
  TextField,
  FormControlLabel,
  Switch,
  Button,
} from '@material-ui/core';

export function RegisterForm() {
  return (
    <form action="">
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />

      <TextField
        id="lastname"
        label="Sobrenome"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        required
        fullWidth
        margin="normal"
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
