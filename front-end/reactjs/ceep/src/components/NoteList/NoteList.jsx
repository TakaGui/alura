import { Component } from 'react';

import { NoteCard } from '../NoteCard';

import './styles.css';

export class NoteList extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.props.notes.subscribe(this._newNotes.bind(this));
  }

  _newNotes(notes) {
    this.setState({
      ...this.state,
      notes,
    });
  }

  render() {
    return (
      <ul className="note-list">
        {
          this.state.notes
            .map((note, index) => {
              return (
                <li className="note-list_item" key={index}>
                  <NoteCard
                    title={note.title}
                    text={note.text}
                    category={note.category}
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
