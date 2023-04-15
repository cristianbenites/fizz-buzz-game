import FizzBuzz from "../FizzBuzz";

test('Ao executar o método validate com números divisíveis por 3 e 5, deve retornar true', () => {
  const excpectedValue = true;
  const fizzBuzz = new FizzBuzz();

  const result = fizzBuzz.validate(15);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método validate com números não divisíveis por 3 e 5, deve retornar false', () => {
  const excpectedValue = false;
  const fizzBuzz = new FizzBuzz();

  const result = fizzBuzz.validate(6);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números divisíveis por 3 e 5, deve retornar a palavra FizzBuzz', () => {
  const excpectedValue = 'FizzBuzz';
  const fizzBuzz = new FizzBuzz();

  const result = fizzBuzz.perform(15);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números não divisíveis por 3 e 5, deve retornar uma string vazia', () => {
  const excpectedValue = '';
  const fizzBuzz = new FizzBuzz();

  const result = fizzBuzz.perform(6);

  expect(result).toEqual(excpectedValue)
});
