import FizzBuzzGame from '../index'

test.each([
  ['3', 9, 'Fizz'],
  ['5', 25, 'Buzz'],
  ['3 e 5', 15, 'FizzBuzz'],
  ['2', 4, 'Foo'],
  ['2 e 3', 6, 'FizzFoo'],
  ['2 e 5', 10, 'BuzzFoo'],
  ['2, 3 e 5', 30, 'FizzBuzzFoo'],
])(
  'Números divisíveis por %p como %p devem ser substituídos pela palavra %p',
  (_, value, expected) => {
    const fizzBuzzGame = new FizzBuzzGame();
    const result = fizzBuzzGame.play(value)

    expect(expected).toEqual(result)
  }
)

test('Números não divisíveis por 2, 3 e 5 devem ser retornados', () => {
  const expectedValue = '7';
  const fizzBuzzGame = new FizzBuzzGame();

  const result = fizzBuzzGame.play(7)

  expect(expectedValue).toEqual(result);
})
