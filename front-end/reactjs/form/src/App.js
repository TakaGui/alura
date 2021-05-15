import {
  Container,
  Typography,
} from '@material-ui/core';

import { RegisterForm } from './components/RegisterForm';

import 'fontsource-roboto';
import './App.css';

function App() {
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
      <RegisterForm />
    </Container>
  );
}

export default App;
