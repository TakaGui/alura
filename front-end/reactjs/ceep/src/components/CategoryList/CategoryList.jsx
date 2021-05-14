import { Component } from 'react';

import './styles.css';

export class CategoryList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this._newCategories = this._newCategories.bind(this);
  }

  componentDidMount() {
    this.props.categories.subscribe(this._newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategories);
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleInputEvent(event) {
    // Enter
    if (event.keyCode === 13) {
      const category = event.target.value;
      this.props.createCategory(category);
    }
  }

  render() {
    return (
      <section className="category-list">
        <ul className="category-list_list">
          {
            this.state.categories.map((category, index) => {
              return (
                <li key={index} className="category-list_item">
                  {category}
                </li>
              );
            })
          }
        </ul>

        <input
          className="category-list_input"
          type="text"
          placeholder="Adicionar categoria"
          onKeyUp={this._handleInputEvent.bind(this)}
        />
      </section>
    );
  }
}
