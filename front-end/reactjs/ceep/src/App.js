import { Component } from 'react';

import { NoteList } from './components/NoteList';
import { RegisterForm } from './components/RegisterForm';

import './assets/App.css';
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section className="content">
        <RegisterForm />
        <NoteList />
      </section>
    );
  }
}

export default App;
