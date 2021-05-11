import { Component } from 'react';
import { NoteList } from './components/NoteList';
import { RegisterForm } from './components/RegisterForm';

class App extends Component {
  render() {
    return (
      <>
        <RegisterForm />
        <NoteList />
      </>
    );
  }
}

export default App;
