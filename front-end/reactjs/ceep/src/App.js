import { Component } from 'react';

import { NoteList } from './components/NoteList';
import { RegisterForm } from './components/RegisterForm';

import './assets/style/App.css';
import './assets/style/index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
    };
  }

  createNote(title, text) {
    const newNote = {title, text};
    const setNotes = [...this.state.notes, newNote];

    const newState = {
      notes: setNotes,
    }

    this.setState(newState);
  }

  deleteNote(index) {
    let arrayNotes = this.state.notes;
    arrayNotes.splice(index,1);
    this.setState({ notes: arrayNotes });
  }

  render() {
    return (
      <section className="content">
        <RegisterForm createNote={this.createNote.bind(this)} />
        <NoteList deleteNote={this.deleteNote.bind(this)} notes={this.state.notes}/>
      </section>
    );
  }
}

export default App;
