import {
  useState,
  useEffect,
} from 'react';

import {
  Stepper,
  Step,
  StepLabel,
  Typography,
} from '@material-ui/core';

import { UserData } from './UserData';
import { PersonalData } from './PersonalData';
import { AddressData } from './AddressData';

export function RegisterForm({
  onSubmitForm,
}) {
  const [stage, setStage] = useState(0);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (stage === forms.length - 1) {
      onSubmitForm(formData);
    }
  });

  const nextStage = () => {
    setStage(stage + 1);
  }

  function getData(data) {
    setFormData({...formData, ...data});
    nextStage();
  }

  const forms = [
    <UserData
      onSubmitForm={getData}
    />,
    <PersonalData
      onSubmitForm={getData}
    />,
    <AddressData
      onSubmitForm={getData}
    />,
    <Typography
      variant="h5"
      component="h2"
      align="center"
    >
      Obrigado pelo Cadastro!
    </Typography>,
  ];

  return (
    <>
      <Stepper activeStep={stage}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>

        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>

        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>

        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {forms[stage]}
    </>
  );
}
