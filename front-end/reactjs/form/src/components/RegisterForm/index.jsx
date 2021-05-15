import Button from '@material-ui/core/Button';

export function RegisterForm() {
  return (
    <form action="">
      <label htmlFor="">Nome</label>
      <input type="text" />

      <label htmlFor="">Sobrenome</label>
      <input type="text" />

      <label htmlFor="">CPF</label>
      <input type="text" />

      <label htmlFor="">Promoções</label>
      <input type="checkbox" />

      <label htmlFor="">Novidades</label>
      <input type="checkbox" />

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
