import sum from '../jestcomponents/sum';
// const sum = require('../jestcomponents/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});