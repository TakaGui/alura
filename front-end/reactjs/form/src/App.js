import {
  Container,
  Typography,
} from '@material-ui/core';

import { FormValidation } from './contexts/FormValidations';

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

      <FormValidation.Provider value={{
        cpf: validCpf,
        password: validPassword
      }}>
        <RegisterForm
          onSubmitForm={onSubmitForm}
        />
      </FormValidation.Provider>
    </Container>
  );
}

export default App;
