const fibonacci = require('../src/fibonacci');

describe('Implemente uma função que faça a sequência de Fibonacci', () => {
  it('fibonacci de 0 deve ser 1', () => {
    expect(fibonacci(0)).toBe(1);
  });

  it('fibonacci de 1 deve ser 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  it('fibonacci de 2 deve ser 2', () => {
    expect(fibonacci(2)).toBe(2);
  });

  it('fibonacci de 3 deve ser 3', () => {
    expect(fibonacci(3)).toBe(3);
  });

  it('fibonacci de 4 deve ser 5', () => {
    expect(fibonacci(4)).toBe(5);
  });

  it('fibonacci de 5 deve ser 8', () => {
    expect(fibonacci(5)).toBe(8);
  });
});
