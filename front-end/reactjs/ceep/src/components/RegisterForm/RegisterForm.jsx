import { Component } from 'react';

import './styles.css';

export class RegisterForm extends Component {
  constructor() {
    super();
    this.title = '';
  }

  handleChangeTitle(event) {
    this.title = event.target.value;
    console.log(this.title);
  }

  render() {
    return (
      <form className="register-form">
        <input
          className="register-form_input"
          type="text"
          placeholder="Título"
          onChange={this.handleChangeTitle.bind(this)}
        />

        <textarea
          className="register-form_input"
          rows="15"
          placeholder="Escreva sua nota..."
        />

        <button
          className="register-form_input register-form_submit"
        >
          Criar Nota
        </button>
      </form>
    );
  }
}