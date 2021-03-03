class NegotiationController {
  private _inputDate;
  private _inputQuantity;
  private _inputValue;

  constructor() {
    this._inputDate = document.querySelector('#date');
    this._inputQuantity = document.querySelector('#quantity');
    this._inputValue = document.querySelector('#value');
  }

  submitForm(event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      this._inputDate.value,
      this._inputQuantity.value,
      this._inputValue.value,
    );

    console.log(negotiation);
  }
}