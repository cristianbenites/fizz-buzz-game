import Buzz from "../Buzz";

test('Ao executar o método validate com números divisíveis por 5, deve retornar true', () => {
  const excpectedValue = true;
  const buzz = new Buzz();

  const result = buzz.validate(5);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método validate com números não divisíveis por 5, deve retornar false', () => {
  const excpectedValue = false;
  const buzz = new Buzz();

  const result = buzz.validate(6);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números divisíveis por 5, deve retornar a palavra Buzz', () => {
  const excpectedValue = 'Buzz';
  const buzz = new Buzz();

  const result = buzz.perform(5);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números não divisíveis por 5, deve retornar uma string vazia', () => {
  const excpectedValue = '';
  const buzz = new Buzz();

  const result = buzz.perform(6);

  expect(result).toEqual(excpectedValue)
});
