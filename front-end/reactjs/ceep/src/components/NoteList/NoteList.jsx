import { Component } from 'react';

import { NoteCard } from '../NoteCard';

import './styles.css';

export class NoteList extends Component {
  render() {
    return (
      <ul className="note-list">
        {
          this.props.notes
            .map((note, index) => {
              return (
                <li className="note-list_item" key={index}>
                  <NoteCard
                    title={note.title}
                    text={note.text}
                    index={index}
                    deleteNote={this.props.deleteNote}
                  />
                </li>
              );
            })
        }
      </ul>
    );
  }
}
