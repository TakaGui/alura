import { PersonalData } from './PersonalData';
import { UserData } from './UserData';
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
    </>
  );
}
