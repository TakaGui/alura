import { useState } from 'react';

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

  const forms = [
    <UserData
      onSubmitForm={nextStage}
    />,
    <PersonalData
      onSubmitForm={nextStage}
      validCpf={validCpf}
    />,
    <AddressData
      onSubmitForm={onSubmitForm}
    />,
  ];

  return (
    <>
      {forms[stage]}
    </>
  );
}
