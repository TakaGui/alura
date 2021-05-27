import {
  useState,
  useContext,
} from 'react';

import {
  TextField,
  FormControlLabel,
  Switch,
  Button,
} from '@material-ui/core';

import { FormValidation } from '../../contexts/FormValidations';
import { useErrors } from '../../hooks/useErrors';

export function PersonalData({
  onSubmitForm,
}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [promotion, setPromotion] = useState(true);
  const [news, setNews] = useState(true);

  const validations = useContext(FormValidation);

  const [errors, validFields, canSubmit] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (canSubmit()) {
          onSubmitForm({
            firstName,
            lastName,
            cpf,
            promotion,
            news,
          });
        }
      }}
    >
      <TextField
        id="name"
        label="Nome"
        name="firstName"
        variant="outlined"
        required
        fullWidth
        margin="normal"
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />

      <TextField
        id="lastname"
        label="Sobrenome"
        name="lastname"
        variant="outlined"
        required
        fullWidth
        margin="normal"
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />

      <TextField
        id="cpf"
        label="CPF"
        name="cpf"
        variant="outlined"
        required
        fullWidth
        margin="normal"
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validFields}
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promotion"
            color="primary"
            checked={promotion}
            onChange={(event) => {
              setPromotion(event.target.checked);
            }}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="news"
            color="primary"
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
          />
        }
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Próximo
      </Button>
    </form>
  );
}
