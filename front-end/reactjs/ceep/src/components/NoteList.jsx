import { Component } from 'react';

import { NoteCard } from './NoteCard';

export class NoteList extends Component {
  render() {
    return (
      <ul>
        {
          Array.of('Trabalho', 'Trabalho', 'Estudo')
            .map((category, index) => {
              return (
                <li key={index}>
                  <div>{category}</div>
                  <NoteCard />
                </li>
              );
            })
        }
      </ul>
    );
  }
}
