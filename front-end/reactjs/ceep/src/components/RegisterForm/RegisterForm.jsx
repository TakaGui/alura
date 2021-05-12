import { Component } from 'react';

import './styles.css';

export class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.title = '';
    this.text = '';
  }

  _handleChangeTitle(event) {
    event.stopPropagation();

    this.title = event.target.value;
  }

  _handleChangeText(event) {
    event.stopPropagation();

    this.text = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.createNote(this.title, this.text);
  }

  render() {
    return (
      <form
        className="register-form"
        onSubmit={this._createNote.bind(this)}
      >
        <input
          className="register-form_input"
          type="text"
          placeholder="Título"
          onChange={this._handleChangeTitle.bind(this)}
        />

        <textarea
          className="register-form_input"
          rows="15"
          placeholder="Escreva sua nota..."
          onChange = {this._handleChangeText.bind(this)}
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