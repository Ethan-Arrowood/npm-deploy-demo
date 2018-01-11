const { sum, subtract } = require('./index')

test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('difference of 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1)
})