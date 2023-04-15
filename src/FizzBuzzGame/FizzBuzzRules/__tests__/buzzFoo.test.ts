import BuzzFoo from "../BuzzFoo";

test('Ao executar o método validate com números divisíveis por 2 e 5, deve retornar true', () => {
  const excpectedValue = true;
  const buzzFoo = new BuzzFoo();

  const result = buzzFoo.validate(10);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método validate com números não divisíveis por 2 e 5, deve retornar false', () => {
  const excpectedValue = false;
  const buzzFoo = new BuzzFoo();

  const result = buzzFoo.validate(2);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números divisíveis por 2 e 5, deve retornar a palavra BuzzFoo', () => {
  const excpectedValue = 'BuzzFoo';
  const buzzFoo = new BuzzFoo();

  const result = buzzFoo.perform(10);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números não divisíveis por 2 e 5, deve retornar uma string vazia', () => {
  const excpectedValue = '';
  const buzzFoo = new BuzzFoo();

  const result = buzzFoo.perform(5);

  expect(result).toEqual(excpectedValue)
});
