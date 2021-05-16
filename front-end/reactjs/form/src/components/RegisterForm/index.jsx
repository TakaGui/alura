import { useState } from 'react';
import { Typography } from '@material-ui/core';

import { UserData } from './UserData';
import { PersonalData } from './PersonalData';
import { AddressData } from './AddressData';

export function RegisterForm({
  onSubmitForm,
  validCpf,
}) {
  const [stage, setStage] = useState(0);

  const nextStage = () => {
    setStage(stage + 1);
  }

  const currentForm = (stage) => {
    switch (stage) {
      case 0:
        return (
          <UserData
            onSubmitForm={nextStage}
          />
        );
      case 1:
        return (
          <PersonalData
            onSubmitForm={nextStage}
            validCpf={validCpf}
          />
        );
      case 2:
        return (
          <AddressData
            onSubmitForm={onSubmitForm}
          />
        );
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
