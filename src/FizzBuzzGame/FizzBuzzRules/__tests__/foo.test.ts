import Foo from "../Foo";

test('Ao executar o método validate com números divisíveis por 2, deve retornar true', () => {
  const excpectedValue = true;
  const foo = new Foo();

  const result = foo.validate(2);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método validate com números não divisíveis por 2, deve retornar false', () => {
  const excpectedValue = false;
  const foo = new Foo();

  const result = foo.validate(3);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números divisíveis por 2, deve retornar a palavra Foo', () => {
  const excpectedValue = 'Foo';
  const foo = new Foo();

  const result = foo.perform(2);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números não divisíveis por 2, deve retornar uma string vazia', () => {
  const excpectedValue = '';
  const foo = new Foo();

  const result = foo.perform(3);

  expect(result).toEqual(excpectedValue)
});
