import Default from "../Default";

test('Ao executar o método validate com números não divisíveis por 2, 3 ou 5, deve retornar true', () => {
  const excpectedValue = true;
  const defaultRule = new Default();

  const result = defaultRule.validate(7);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método validate com números divisíveis por 2, 3 ou 5, deve retornar false', () => {
  const excpectedValue = false;
  const defaultRule = new Default();

  const result = defaultRule.validate(6);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números não divisíveis por 2, 3 ou 5, deve retornar o próprio valor', () => {
  const excpectedValue = '7';
  const defaultRule = new Default();

  const result = defaultRule.perform(7);

  expect(result).toEqual(excpectedValue)
});

test('Ao executar o método perform com números divisíveis por 2, 3 ou 5, deve retornar uma string vazia', () => {
  const excpectedValue = '';
  const defaultRule = new Default();

  const result = defaultRule.perform(6);

  expect(result).toEqual(excpectedValue)
});
