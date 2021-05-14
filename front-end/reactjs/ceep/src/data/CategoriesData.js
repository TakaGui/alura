export class CategoriesData {
  constructor() {
    this.categories = [];
    this._observable = [];
  }

  subscribe(func) {
    this._observable.push(func);
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
