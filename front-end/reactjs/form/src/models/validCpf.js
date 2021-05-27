export function validCpf(cpf) {
  if (cpf.length !== 11) {
    return {
      valid: false,
      text: 'CPF deve ter 11 dígitos.',
    };
  } else {
    return {
      valid: true,
      text: '',
    };
  }
}