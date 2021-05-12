import { Component } from 'react';

import { NoteList } from './components/NoteList';
import { RegisterForm } from './components/RegisterForm';

import './assets/App.css';
import './assets/index.css';

class App extends Component {
  createNote(title, text) {
    console.log(`Uma nova nota foi criada ${title} ${text}`);
  }

  render() {
    return (
      <section className="content">
        <RegisterForm createNote={this.createNote} />
        <NoteList />
      </section>
    );
  }
}

export default App;
