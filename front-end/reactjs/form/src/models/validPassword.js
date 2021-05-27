export function validPassword(password) {
  if (password.length < 4 || password.length > 72) {
    return {
      valid: false,
      text: 'Senha deve ter entre 4 e 72 dígitos.',
    };
  } else {
    return {
      valid: true,
      text: '',
    };
  }
}