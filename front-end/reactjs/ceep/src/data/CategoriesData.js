export class CategoriesData {
  constructor() {
    this.categories = [];
    this._observable = [];
  }

  subscribe(func) {
    this._observable.push(func);
  }

  unsubscribe(func) {
    this._observable = this._observable.filter(f => f !== func);
  }

  notify() {
    this._observable.forEach(func => {
      func(this.categories);
    });
  }

  createCategory(category) {
    this.categories.push(category);
    this.notify();
  }
}
