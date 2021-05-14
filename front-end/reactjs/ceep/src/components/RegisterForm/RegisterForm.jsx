import { Component } from 'react';

import './styles.css';

export class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.category = 'Sem categoria';
    this.title = '';
    this.text = '';

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.props.categories.subscribe(this._newCategories.bind(this));
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleChangeCategory(event) {
    event.stopPropagation();

    this.category = event.target.value;
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

    this.props.createNote(
      this.title,
      this.text,
      this.category,
    );
  }

  render() {
    return (
      <form
        className="register-form"
        onSubmit={this._createNote.bind(this)}
      >
        <select
          className="form-cadastro_input"
          onChange={this._handleChangeCategory.bind(this)}
        >
          <option>Sem Categoria</option>
          {
            this.state.categories.map((category, index) => {
              return (
                <option key={index}>{category}</option>
              )
            })
          }
        </select>

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