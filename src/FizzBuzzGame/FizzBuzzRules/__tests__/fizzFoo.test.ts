import FizzFoo from "../FizzFoo";

test('Ao executar o método validate com números divisíveis por 2 e 3, deve retornar true', () => {
  const excpectedValue = true;
  const fizzFoo = new FizzFoo();

  const result = fizzFoo.validate(6);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método validate com números não divisíveis por 2 e 3, deve retornar false', () => {
  const excpectedValue = false;
  const fizzFoo = new FizzFoo();

  const result = fizzFoo.validate(9);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números divisíveis por 2 e 3, deve retornar a palavra FizzFoo', () => {
  const excpectedValue = 'FizzFoo';
  const fizzFoo = new FizzFoo();

  const result = fizzFoo.perform(6);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números não divisíveis por 2 e 3, deve retornar uma string vazia', () => {
  const excpectedValue = '';
  const fizzFoo = new FizzFoo();

  const result = fizzFoo.perform(7);

  expect(result).toEqual(excpectedValue)
});
