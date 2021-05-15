import {
  Container,
  Typography,
} from '@material-ui/core';

import { RegisterForm } from './components/RegisterForm';

import 'fontsource-roboto';
import './App.css';


function App() {
  const onSubmitForm = (data) => {
    console.log(data);
  }

  const validCpf = (cpf) => {
    if (cpf.length !== 11) {
      return {
        valid: false,
        text: 'CPF deve ter 11 dígitos.',
      };
    } else {
      return {
        valid: true,
        text: '',
      };
    }
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
        validCpf={validCpf}
      />
    </Container>
  );
}

export default App;
