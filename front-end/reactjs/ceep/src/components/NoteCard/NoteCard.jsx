import { Component } from 'react';

import {ReactComponent as DeleteSVG} from '../../assets/image/delete.svg';

import './styles.css';

export class NoteCard extends Component {
  delete() {
    const index = this.props.index;

    this.props.deleteNote(index);
  }

  render() {
    return (
      <section className="note-card">
        <header className="note-card_header">
          <h3 className="note-card_title">
            {this.props.title}
          </h3>

          <DeleteSVG onClick={this.delete.bind(this)} />
        </header>
        <p className="note-card_text">
          {this.props.text}
        </p>
      </section>
    );
  }
}
