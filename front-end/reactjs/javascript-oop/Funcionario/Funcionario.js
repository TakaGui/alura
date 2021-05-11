export class Funcionario {
  #senha;

  constructor(nome, salario, cpf) {
    if (this.constructor === Funcionario) {
      throw new Error(
        'Você não deveria instanciar um objeto do tipo Funcionario diretamente'
      )
    }

    this._nome = nome;
    this._salario = salario;
    this._cpf = cpf;

    this._bonificacao = 1;
    this.#senha;
  }

  get senha() {
    return this.#senha;
  }

  cadastrarSenha(senha) {
    this.#senha = senha;
  }
}
