import { PersonalData } from './PersonalData';
import { UserData } from './UserData';
import { AddressData } from './AddressData';

export function RegisterForm({
  onSubmitForm,
  validCpf,
}) {
  return (
    <>
      <PersonalData
        onSubmitForm={onSubmitForm}
        validCpf={validCpf}
      />
      <UserData />
      <AddressData />
    </>
  );
}
