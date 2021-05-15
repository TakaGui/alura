import { useState } from 'react';
import { Typography } from '@material-ui/core';

import { UserData } from './UserData';
import { PersonalData } from './PersonalData';
import { AddressData } from './AddressData';

export function RegisterForm({
  onSubmitForm,
  validCpf,
}) {
  const [stage, setStage] = useState(1);

  const currentForm = (stage) => {
    switch (stage) {
      case 0:
        return (<UserData />);
      case 1:
        return (
          <PersonalData
            onSubmitForm={onSubmitForm}
            validCpf={validCpf}
          />
        );
      case 2:
        return (<AddressData />);
      default:
        return (
          <Typography
            variant="h4"
            component="h2"
            align="center"
          >
            Erro ao selecionar formulário
          </Typography>
        );
    }
  }

  return (
    <>
      {currentForm(stage)}
    </>
  );
}
