import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export function RegisterForm() {
  return (
    <form action="">
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        required
        fullWidth
      />

      <TextField
        id="lastname"
        label="Sobrenome"
        variant="outlined"
        required
        fullWidth
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        required
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
