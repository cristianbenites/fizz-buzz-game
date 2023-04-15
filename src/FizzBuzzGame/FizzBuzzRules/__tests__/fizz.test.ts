import Fizz from "../Fizz";

test('Ao executar o método validate com números divisíveis por 3, deve retornar true', () => {
  const excpectedValue = true;
  const fizz = new Fizz();

  const result = fizz.validate(3);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método validate com números não divisíveis por 3, deve retornar false', () => {
  const excpectedValue = false;
  const fizz = new Fizz();

  const result = fizz.validate(4);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números divisíveis por 3, deve retornar a palavra Fizz', () => {
  const excpectedValue = 'Fizz';
  const fizz = new Fizz();

  const result = fizz.perform(3);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números não divisíveis por 3, deve retornar uma string vazia', () => {
  const excpectedValue = '';
  const fizz = new Fizz();

  const result = fizz.perform(4);

  expect(result).toEqual(excpectedValue)
});
