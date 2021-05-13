import { Component } from 'react';

import { RegisterForm } from './components/RegisterForm';
import { CategoryList } from './components/CategoryList';
import { NoteList } from './components/NoteList';

import './assets/style/App.css';
import './assets/style/index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      categories: [],
    };
  }

  createNote(title, text) {
    const newNote = {title, text};
    const setNotes = [...this.state.notes, newNote];

    const newState = {
      ...this.state,
      notes: setNotes,
    }

    this.setState(newState);
  }

  deleteNote(index) {
    let arrayNotes = this.state.notes;
    arrayNotes.splice(index,1);
    this.setState({ notes: arrayNotes });
  }

  createCategory(category) {
    const newCategory = category;
    const setCategory = [...this.state.categories, newCategory];

    const newState = {
      ...this.state,
      categories: setCategory,
    }

    this.setState(newState);
  }

  render() {
    return (
      <section className="container">
        <RegisterForm createNote={this.createNote.bind(this)} />

        <main className="content">
          <CategoryList
            createCategory={this.createCategory.bind(this)}
            categories={this.state.categories}
          />

          <NoteList
            deleteNote={this.deleteNote.bind(this)}
            notes={this.state.notes}
          />
        </main>
      </section>
    );
  }
}

export default App;
