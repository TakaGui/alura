import { Component } from 'react';

import { NoteCard } from '../NoteCard/NoteCard';

import './styles.css';

export class NoteList extends Component {
  render() {
    return (
      <ul className="note-list">
        {
          Array.of('Trabalho', 'Trabalho', 'Estudo')
            .map((category, index) => {
              return (
                <li className="note-list_item" key={index}>
                  <NoteCard />
                </li>
              );
            })
        }
      </ul>
    );
  }
}
