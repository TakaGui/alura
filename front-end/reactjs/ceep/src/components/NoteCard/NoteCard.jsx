import { Component } from 'react';

import './styles.css';

export class NoteCard extends Component {
  render() {
    return (
      <section className="note-card">
        <header className="note-card_header">
          <h3 className="note-card_title">Título</h3>
        </header>
        <p className="note-card_text">Escreva sua nota</p>
      </section>
    );
  }
}
