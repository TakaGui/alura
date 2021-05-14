import { Component } from 'react';

import { RegisterForm } from './components/RegisterForm';
import { CategoryList } from './components/CategoryList';
import { NoteList } from './components/NoteList';

import { CategoriesData } from './data/CategoriesData';
import { NoteListData } from './data/NoteListData';

import './assets/style/App.css';
import './assets/style/index.css';

class App extends Component {
  constructor() {
    super();

    this.categories = new CategoriesData();
    this.notes = new NoteListData();
  }

  render() {
    return (
      <section className="container">
        <RegisterForm
          categories={this.categories}
          createNote={this.notes.createNote.bind(this.notes)}
        />

        <main className="content">
          <CategoryList
            categories={this.categories}
            createCategory={this.categories.createCategory.bind(this.categories)}
          />

          <NoteList
            notes={this.notes}
            deleteNote={this.notes.deleteNote.bind(this.notes)}
          />
        </main>
      </section>
    );
  }
}

export default App;
