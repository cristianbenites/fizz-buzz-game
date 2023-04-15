import FizzBuzzFoo from "../FizzBuzzFoo";

test('Ao executar o método validate com números divisíveis por 2, 3 e 5, deve retornar true', () => {
  const excpectedValue = true;
  const fizzBuzzFoo = new FizzBuzzFoo();

  const result = fizzBuzzFoo.validate(30);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método validate com números não divisíveis por 2, 3 e 5, deve retornar false', () => {
  const excpectedValue = false;
  const fizzBuzzFoo = new FizzBuzzFoo();

  const result = fizzBuzzFoo.validate(10);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números divisíveis por 2, 3 e 5, deve retornar a palavra FizzBuzzFoo', () => {
  const excpectedValue = 'FizzBuzzFoo';
  const fizzBuzzFoo = new FizzBuzzFoo();

  const result = fizzBuzzFoo.perform(30);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números não divisíveis por 2, 3 e 5, deve retornar uma string vazia', () => {
  const excpectedValue = '';
  const fizzBuzzFoo = new FizzBuzzFoo();

  const result = fizzBuzzFoo.perform(10);

  expect(result).toEqual(excpectedValue)
});
