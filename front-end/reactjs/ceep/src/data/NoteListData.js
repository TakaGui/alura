import { NotesData } from './NotesData';

export class NoteListData {
  constructor() {
    this.notes = [];
    this._observable = [];
  }

  subscribe(func) {
    this._observable.push(func);
  }

  notify() {
    this._observable.forEach(func => {
      func(this.notes);
    });
  }

  createNote(title, text, category) {
    const newNote = new NotesData(title, text, category);
    this.notes.push(newNote);
    this.notify();
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
    this.notify();
  }
}
