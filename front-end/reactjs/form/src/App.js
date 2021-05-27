import {
  Container,
  Typography,
} from '@material-ui/core';

import { RegisterForm } from './components/RegisterForm';
import { validCpf } from './models/validCpf';
import { validPassword } from './models/validPassword';

import 'fontsource-roboto';
import './App.css';

function App() {
  const onSubmitForm = (data) => {
    console.log(data);
  }

  return (
    <Container
      component="article"
      maxWidth="sm"
    >
      <Typography
        variant="h3"
        component="h1"
        align="center"
      >
        Formulário de cadastro
      </Typography>
      <RegisterForm
        onSubmitForm={onSubmitForm}
        validations={{
          cpf: validCpf,
          password: validPassword
        }}
      />
    </Container>
  );
}

export default App;
