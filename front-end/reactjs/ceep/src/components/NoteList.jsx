import { Component } from 'react';

import { NoteCard } from './NoteCard';

export class NoteList extends Component {
  render() {
    return (
      <ul>
        <li>
          <NoteCard />
        </li>
      </ul>
    );
  }
}
