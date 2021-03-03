const negotiationController = new NegotiationController();

document
  .querySelector('.form')
  .addEventListener(
    'submit',
    negotiationController
      .submitForm
      .bind(negotiationController)
  );
