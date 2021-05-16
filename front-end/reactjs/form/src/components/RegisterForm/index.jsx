import {
  useState,
  useEffect,
} from 'react';

import { UserData } from './UserData';
import { PersonalData } from './PersonalData';
import { AddressData } from './AddressData';

export function RegisterForm({
  onSubmitForm,
  validCpf,
}) {
  const [stage, setStage] = useState(0);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log(formData);
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
      validCpf={validCpf}
    />,
    <AddressData
      onSubmitForm={getData}
    />,
  ];

  return (
    <>
      {forms[stage]}
    </>
  );
}
